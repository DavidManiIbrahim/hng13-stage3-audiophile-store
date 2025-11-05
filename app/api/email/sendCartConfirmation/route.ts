import { sendCartConfirmationEmail, sendEmailResend } from "@/lib/mail";

export async function POST(request: Request): Promise<Response> {
  try {
    const { to, productName, quantity, subject, html } = await request.json();

    if (!to) {
      return new Response(
        JSON.stringify({ error: "Missing 'to'" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // If subject & html provided, use them directly (generic send)
    if (subject && html) {
      const data = await sendEmailResend({ to, subject, html });
      return new Response(JSON.stringify({ ok: true, id: data?.id }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!productName || !quantity) {
      return new Response(
        JSON.stringify({ error: "Missing 'productName' or 'quantity' for default template" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await sendCartConfirmationEmail(to, productName, Number(quantity));
    return new Response(JSON.stringify({ ok: true, id: data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: "Unexpected error", detail: String(error?.message || error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


