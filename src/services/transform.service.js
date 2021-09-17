export class TranformService {
	static fbObjectToA(fbData){
		return Object.keys(fbData).map(k => {
			const item = fbData[k]
			item.id = k
			return item
		})
	}
}