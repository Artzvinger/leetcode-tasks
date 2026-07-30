function sleep(ms){
	const promise = new Promise((resolve, reject) => {
		setTimeout(()=> {
			console.log(`Прошло ${ms} миллисекунд, продолжаем...`);
			resolve();
		}, ms);
	})
	return promise;
}

sleep(3000).then(()=>{
	console.log("Успех")
})

function race(promises){
	
	return new Promise((resolve,reject)=>{
		promises.forEach(promise => {
			promise.then(()=>{
				resolve();
			}).catch(reject);
		});
	})
}

race([1,2,3,4,5])