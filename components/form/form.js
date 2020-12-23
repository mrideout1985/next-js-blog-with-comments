import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./form.module.scss";

export default function Form({ _id }) {
	const [formData, setFormData] = useState();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = async (data) => {
		setIsSubmitting(true);
		let response;
		setFormData(data);
		try {
			response = await fetch("/api/createComment", {
				method: "POST",
				body: JSON.stringify(data),
				type: "application/json",
			});
			setIsSubmitting(false);
			setHasSubmitted(true);
		} catch (err) {
			setFormData(err);
		}
	};

	if (isSubmitting) {
		return <h3>Submitting comment…</h3>;
	}
	if (hasSubmitted) {
		return (
			<>
				<h3>Thanks for your comment!</h3>
				<ul>
					<li>
						Name: {formData.name} <br />
						Email: {formData.email} <br />
						Comment: {formData.comment}
					</li>
				</ul>
			</>
		);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
			disabled
		>
			<input
				ref={register}
				className={styles.input}
				type="hidden"
				name="_id"
				value={_id}
			/>
			<label className={styles.label}>
				<span className={styles.span}>Name</span>
				<input
					name="name"
					ref={register({ required: true })}
					className={styles.input}
					placeholder="John Appleseed"
				/>
			</label>
			<label className={styles.label}>
				<span className={styles.span}>Email</span>
				<input
					name="email"
					type="email"
					ref={register({ required: true })}
					className={styles.input}
					placeholder="your@email.com"
				/>
			</label>
			<label className={styles.label}>
				<span className={styles.span}>Comment</span>
				<textarea
					ref={register({ required: true })}
					name="comment"
					className={styles.textarea}
					rows="8"
					placeholder="Enter some long form content."
				></textarea>
			</label>
			{/* errors will return when field validation fails  */}
			{errors.exampleRequired && <span>This field is required</span>}
			<input type="submit" className={styles.submit} />
		</form>
	);
}
