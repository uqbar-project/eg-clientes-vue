import toast from "@/components/toast";

export default function errorHandler(error: any) {
	const errorMessage = (error.response.status === 500) ? error.message : error.response.statusText
	toast.error(errorMessage)
	console.log(error.response)
}