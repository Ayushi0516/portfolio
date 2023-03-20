import "./style/Github.scss"

const Github=()=>{
    return(
        <div className="git">
          <h1 className="kill">   GITHUB </h1> 
         <div className="stack">
            <div>
            <img   width="500px"  className="dark" src="https://github-readme-stats.vercel.app/api?username=Ayushi0516&theme=dark&hide_border=false&include_all_commits=true&count_private=true" />
            </div>
         <div>
            <img width="540px"   className="dark" src="https://github-readme-streak-stats.herokuapp.com/?user=Ayushi0516&theme=dark&hide_border=false"/>
        </div>
         </div>

            <div className="used">
            <img width="460px" className="dark" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ayushi0516&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"/>
            </div>
        </div>  
    )
}
export default Github