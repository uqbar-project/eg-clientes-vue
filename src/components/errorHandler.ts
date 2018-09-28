import toast from "@/components/toast";

export default function errorHandler(error: Error) {
	toast.error(error.message)
	console.log(error)
}