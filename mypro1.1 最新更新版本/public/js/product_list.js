

   var vm = new Vue({
        el: "#app",
        data:{
            result:"",
            pno:1,
            pageCount:"",
            className:"classA",
            className1:"classB"
        },
       methods:{
           getMore(a) {
               axios.get("http://127.0.0.1:3000/product/list",
                   {
                       params: {
                           pno:a,
                           pageSize: 12
                       },
                   }).then((res) => {
                   // console.log(res)
                   this.result = res.data;
                   this.pno=a;
                   this.pageCount=res.data.pageCount;
               })
           },
           getPrev(b){
                this.pno=this.pno+b;
               if(this.pno==0){
                   this.pno=1;
               }
               if(this.pno>=4){
                   this.pno=3
               }
               this.getMore(this.pno)

           }
       },
        created(){this.getMore(this.pno)

        }
    })






