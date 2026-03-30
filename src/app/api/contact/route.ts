import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, contactMethod, ageRange, reason, groupInterest, message, referral } = body;

    const { error } = await resend.emails.send({
      from: 'Healing Word Counseling <hello@healingwordcounseling.com>',
      to: ['drewandkirstenfiler@gmail.com'],
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: #1B4332; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Consultation Request</h1>
            <p style="color: #a7d7b8; margin: 8px 0 0 0; font-size: 14px;">Healing Word Counseling</p>
          </div>
          <div style="background: white; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 40%;">
                  <strong style="color: #374151; font-size: 13px;">Name</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151; font-size: 13px;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #2D6A4F;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151; font-size: 13px;">Phone</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                  ${phone || 'Not provided'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151; font-size: 13px;">Preferred Contact</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                  ${contactMethod}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151; font-size: 13px;">Age Range</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                  ${ageRange}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151; font-size: 13px;">Reason for Reaching Out</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                  ${reason}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151; font-size: 13px;">Group Interest</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                  ${groupInterest}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #374151; font-size: 13px;">How They Heard About Us</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">
                  ${referral}
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0;" colspan="2">
                  <strong style="color: #374151; font-size: 13px; display: block; margin-bottom: 8px;">Message</strong>
                  <div style="background: #f9fafb; border-left: 3px solid #2D6A4F; padding: 12px 16px; border-radius: 4px; color: #374151; font-size: 14px; line-height: 1.6;">
                    ${message}
                  </div>
                </td>
              </tr>
              ` : ''}
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">
              <p style="margin: 0; color: #166534; font-size: 13px;">
                💡 <strong>Reply directly to this email</strong> to respond to ${name} at ${email}.
              </p>
            </div>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">
            Healing Word Counseling — healingwordcounseling.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
