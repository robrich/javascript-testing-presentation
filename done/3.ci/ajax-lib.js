function getAllRecords(id, cb) {
	$.ajax({
		url: '/api/get-all/'+encodeURIComponent(id),
		method: 'POST',
		success: function (data) {
			cb(null, data);
		},
		error: function (xhr, status, err) {
			cb({xhr: xhr, status: status, err: err});
		}
	});
}
