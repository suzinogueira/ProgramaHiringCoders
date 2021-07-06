import darthError from '../../../assets/images/logo/darth-vader.png';
import darthFundo from '../../../assets/images/background/darthError.jpg';

let Error404 = {
    is_private: false,
    render: async () => {
        let view = `${error}`
        return view;
    },

    after_render: () => {
        console.log('Try another one... :)')
    }
}
let error = `

<div class="error-default" style="background-image:url('${darthFundo}')">
    <div>
        <h1>Erro 404!</h1>
        <a href="http://localhost:8080/">
            <img src="${darthError}" alt="Vader error" width="300px">
        </a>
        <h2>Caro padawan, esse conteúdo não existe !</h2>
        <h3> Clique no Vader e tente novamente.</h3>
    </div>
</div>

`

export default Error404;