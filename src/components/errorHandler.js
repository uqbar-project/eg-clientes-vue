import toast from "@/components/toast";
export default function errorHandler(error) {
    toast.error(error.message);
    console.log(error.message);
}
//# sourceMappingURL=errorHandler.js.map