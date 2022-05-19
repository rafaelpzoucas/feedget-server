import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e7978aadeed0aa",
        pass: "9d0587c51e7d38"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <contato@feedget.com>',
            to: 'Rafael Zoucas <rafaelzoucas@gmail.com>',
            subject,
            html: body,
        })
    }
}