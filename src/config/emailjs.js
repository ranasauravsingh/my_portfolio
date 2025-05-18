import emailjs from "@emailjs/browser";

export const SendEmailJS = async (payload) => {
	const emailServiceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
	const emailTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
	const emailUserID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
	const emailToName = import.meta.env.VITE_EMAILJS_TO_NAME;

	const emailPayload = {
		to_name: emailToName,
		...payload,
	};
	return await emailjs.send(
		emailServiceID,
		emailTemplateID,
		emailPayload,
		emailUserID
	);
};
