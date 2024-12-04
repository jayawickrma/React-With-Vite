export default function Item (props:{title: string,desc:string}){
    return(
        <>
            <h2>{props.title}</h2>
            {/*<h2>RAD</h2>*/}
            <h2>{props.desc}</h2>
            {/*<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci quae quam ratione vero. Alias, exercitationem, ipsa. Architecto, aut consequuntur delectus fugiat labore minus nam nemo nesciunt possimus quidem vel!</h2>*/}
        </>
    )
}