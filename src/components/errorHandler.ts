import toast from "@/components/toast";

export default function errorHandler(error: any) {
	toast.error(error.message)
	console.log(error.message)
}
