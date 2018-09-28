import iZtoast from 'izitoast'

const toast = {
	error: (message: string, title = 'Error') => {
		return iZtoast.error({
			title: title,
			message: message,
			position: 'bottomCenter'
		})
	},
	success: (message : string, title = 'Success') => {
		return iZtoast.success({
			title: title,
			message: message,
			position: 'bottomCenter'
		})
	}
}

export default toast