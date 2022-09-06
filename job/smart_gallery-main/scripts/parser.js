axios.defaults.baseURL = "https://blackboxbasic.herokuapp.com/";

const parser = {
	dataFetch: async (_uid, _iuid) =>
	{
		if (_iuid != undefined) {
			return axios.post(config.get_image_url, {
				_uuid: _uid,
				_iuid: _iuid
			});
		} else {
			return axios.get(config.query_url + _uid);
		}
	},
	getUid: () =>
	{
		let get_url = document.location.href;
		let url = new URL(get_url);
		let _uid = url.searchParams.get("_uuid");

		return _uid;
	},
	getIuid: async () => {
		let get_url = document.location.href;
		let url = new URL(get_url);
		let _iuid = url.searchParams.get("_iuid");

		return _iuid;
	}
}