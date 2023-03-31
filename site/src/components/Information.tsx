import logoSlim from '../assets/logoSlim.svg'

type Information = {
    title: string;
    text: string;
}

export function Information(props: Information) {
    return (
        <div className=" py-5 my-5 text-center">
            <h1 className="title pb-5">{props.title}</h1>
            <img className="d-block mx-auto mb-4" src={logoSlim} alt="logo"/>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{props.text}</p>
            </div>
        </div>
    );
}

type Informations = {
    title: string;
    text: string;
}

export function Informations(props: Informations) {
    return (
        <div className=" py-5 my-5 text-center">
            <h1 className="title pb-5">{props.title}</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{props.text}</p>
            </div>
        </div>
    );
}