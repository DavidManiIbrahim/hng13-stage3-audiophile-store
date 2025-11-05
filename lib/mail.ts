type SendEmailArgs = {
  to: string;
  subject: string;
  html: string;
  fromOverride?: string;
};

export async function sendEmailResend(args: SendEmailArgs): Promise<{ id?: string }>{
  const apiKey = process.env.RESEND_API_KEY;
  const from = args.fromOverride || process.env.RESEND_FROM_EMAIL || "Audiophile Store <no-reply@resend.dev>";

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY env variable");
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: args.to, subject: args.subject, html: args.html }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend API error: ${detail}`);
  }

  const data = (await res.json()) as { id?: string };
  return data;
}

export function buildCartConfirmationHtml(productName: string, quantity: number): string {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; line-height:1.6; color:#111;">
      <h2 style="margin:0 0 12px;">Item added to your cart</h2>
      <p style="margin:0 0 8px;">You added <strong>${productName}</strong> (x${quantity}) to your cart.</p>
      <p style="margin:0;">Thanks for shopping with Audiophile.</p>
    </div>
  `;
}

export async function sendCartConfirmationEmail(to: string, productName: string, quantity: number): Promise<{ id?: string }>{
  const subject = `Added to cart: ${productName}`;
  const html = buildCartConfirmationHtml(productName, quantity);
  return await sendEmailResend({ to, subject, html });
}


