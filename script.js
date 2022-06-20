new Vue({
    el:'#app',
    data:{
        editando: null,
        titulo:"Hello word!",
        novoNome:"",
        nomes: ["Hello word!"],
        mostrar: true
    }, 
    methods:{
        // OU lterarTitulo: function()a{}
        editar(index){
           this.editando = index
           this.novoNome = this.nomes[index]
        },
        addNome(){
            if(!this.novoNome){
                return
            }
            if(this.editando != null){
                this.nomes[this.editando] = this.novoNome
                this.editando = null
                this.novoNome=""
                return
            }
            this.nomes.push(this.novoNome),
            this.novoNome=""
        },
        removerNome(index){
            this.nomes.splice(index,1)
        }
    }

})