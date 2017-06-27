class Observable{

	constuctor(obj){

		this.watcher = null;

		return this.observeAll(obj);
		
	}


	$watch(path,fn){


	}


	observeAll(obj){
		if(!isPlainObject(obj)){
			return;
		}

		return new Proxy(obj,{
			get(target,prop,receiver){
				if(target.prop.watcher){
					return target[prop];

				}else{
					let result = new Observable(target[prop]);

					result.$watch()


					return result;
				}				

			},

			set(target,prop,value,receiver){
				let fn = target.watcher

				if(fn){
					fn.call(target,prop);
				}

			}

		})

	}

}


