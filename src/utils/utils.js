export default {
    formateDate(time){
        if(!time)return'';
        let data = new Date(time);
        return data.getFullYear() + '-' + (data.getMonth()+1) + '-' + data.getDate()+ '  ' + data.getHours() + ':' + data.getMinutes()
            + ':' + data.getSeconds();
    },
    pagination(data,callback){
        return{
            onChange:(current)=>{
                callback(current)
            },
            current:data.page,
            pageSize:data.page_size,
            total:data.total,
            showTotal:()=>{
                return `共${data.total}条`
            },
            showQuickJumper:true
        }
    }
}