
import { Button } from "@mui/material"
import  "./Styles/Project.css"


const Project=()=>{
    return(
        <div className="purple" id="project">
              <h2 className="kill">PROJECTS</h2>
        <div className="project-box">
           
              <div className="project-box1">
                    <img className="pro"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAACdCAMAAAD2bIHgAAABsFBMVEUYGBgAAACGhob///8MDAxqamoWFhb2WCrsIW31UjH3XCX1VC/tJWgTExP3XiLsH2/uK2HrGXf0TDn0Tjb5+fnvL1tcXFzzRkDwNVTuLV7qF3ns7Oz4Yh3zRz7xPUrxO03Dw8Pg4OAwMDDX19eUlJTyQUXvM1fpEIEAFBgAGAAAGA/pD4S/v791dXU+Pj5eXl6np6cAFxX94+MAGA1QUFC0tLTNzc0ADBgNFxj1XUv+8PBGRkYoKCg0NDSPj49TU1M/JBhuMhd/PBeTQRejRRcgGxhxNRizTBjeXBjtYhjQVxhVLBjATR7nWCK2RyGAMh6aOiNaKB7YSyv2cVj0QxaPMyb6rqNEIR00HRv0Qyf4lIe2PS35oJf81M/2fGzVQjb1ZVz6vLfzMR/3gX3FOjryNTX0Z2aALCz3kpRXISP1cnjzT1jxMTvROD9oJCjyWmj4oKn2fozwADPxHEfzYXnyT2v1gJXyXHz6v8rTL029KkiNJDyjJUT6ydP1kalrHjLzbpJKGynEIljsAGHvTIfyfqaAG0GeGlHTF265FmSQF05mFjszFyGpEmFMFy93FEmdSzhuAAAJbklEQVR4nO2Yi1cTVxrA5+ZOBhRmdevwcAchL2xgkxACCREC8QFd7bbd1qpbutpWWtzqpsVutLLd0mKhVRDcf3m/O3deeaD2fHC4Oef7nUPmcb87jx/38d3RNAKFHj3uJ+h4SCEaUoiGFKIhhWhIIRpSiIYUoiGFaEghGlKIhhSiIYVoSCEaUoiGFKIhhWhIIRpSiIYUoiGFaEghGlKIhhSiIYVoSCEaUoiGFKIhhWhIIRpSiIYUoiGFaEghGlKIhhSiIYVoSCEaUoiGFKJRXGE57VI+7ic5GIUVGumZmYuXLl9ZXLxy+dLSzEz6uB/oAJRVWJ5ZeucvV68NuVx7d/Gv6Rkl26KiCsvpi4tXh5p493I5bRz3k7WipsL00pVrzQIFV99Jq9edVVRopC+9PzT0hzYMDb13UTmHCiospxfb6XN5/5JqDtVTWDY/OPlK/qaYQ+UUlsvvnTzZ1dUlfpydpj34VcyhagqN9Addr0WtvqyawvSHXT09PfDXJbZNez3e3kcqOVRMYfqjnjfhuqZQkq2WwvLS9RMBPRc+vnGiPR8q1AzVUpi+eeJMwPLHs7fO3AifCfi7Os1QKYXlT64H/oRCi89+urzcTuE/Jo/7YX2UUpi++ZbP7QvLy59ZnPM7n90481YrnyjTDJVSWP7cN3SuAO3vC174tMD53QvLrQpvKjMaqqRw8v65AFB357ZVWBm4Nctnb6+unmvic02VjzYqKUzfHAgo8FnoxYWV1ZUv7sD2y9XVgUbuq9KTlVL4VSBotMDv3Z7l1q3R1YHVL0WTvLc6MDrqFortP1WZUBRSWF4aDQEKVx7AdFL4erVWG/0abN4dXg0HfEUKWyjfHx4ddhkdLvC12j1rFjrxnQcrtdq/7nI+CzZHvZDRb0hhC5PfDocQCh/wQu27ArS/tVqttrYhbNZ8y6SwlclvR0IIhY94YaQ2+BNMyQ9HhodHwCZfXxt2A76h6aSFFoV1oXBk5N9roK6wBjt16Naz33kRqiTXSikcDFHgj4XCwXr9EYjbeDQ4WH+8bvHC936EKl9rlFb4hBfAGzTB7+v1+vmH0KF/Ol/3Av5DY2ELk/fPh3AUWgXh7WFffbC+KQbCx/UggBS2Ut7rczjv/EmFXHqrP4HpuLAJAp1Shx9IYSuTP/QFgELhbeMJ7J92BsG+Rv5LClsZ//FsQIFviLXJaZAFWY31sLfvbCNPSWErkz+fDoChb3adF7b6xCC4sX327OkmVMlplFJYXmpQuN4L08kpMSFvNusDfhw/7sf1UEkh9ORen/XNra0nlgUT8q+9W72tKNOP1VI4+TTkaKt3axtGw/XtdgJ7f1HGoFoKtfFn3d293Q6w2dq0Nra3trrD5zx+JoXtKe91h9n+9dRWd1t+GTvuRw1QS6E2/tupMN2nDmBPnUaomkJtaucga2F+mzru5wyhmsLy3vM/vpZnyiQ0AtUUauNPX+twZ1yVrNpBOYXa+N7zP72SZ2oZVFAhONx5lcHdKbUMqqhQm9R23z6I5y+UGgcFKirUylMvd9ob3N9TaS6WKKkQOnP5xc6fW9h/OaZYJxYoqhAkjr/cfx72t7O7N6VcJxYoqxAkjo2//N/u/s7Ozv7+7ou9qTGFViRhFFYITI5PjTlMKZbIhFFbYUdACtGQQjSkEA0pREMK0ZBCNKQQDSlEcxQKDUHosLHQD2of3VjYcuDWOCiy3X2N0H3a3QzL4Ss0dCYx/MPQGzOmO0dw1nRPSPTQFZiuB4depAeE6n64GaqoyxKzscS7o3+jpsvhOXyFLBUDMvmofFSWLaVYqLCUFUf6XKyYEOUsL6JjxVQuEM0mkqWcZwYiY3qo4bDpYjJZSiWca5qVYmzOjWSJfCkej6VMp8TQi7EJPbijOHYpzR2uwyNQWOKSjOk4SvEYCxc6QtkEtx1LLOlG21k/imU497Xr/ZzrwTuzrMW55YXrCZtPSGUsazsF3O4XJwzT5k4Ii/E8bE3d5h4ToRZ/CByJwkw0ms1brqxGhTH3bL/lKyxGITzJrXlXlD4NJuIV76jfsgKFBovz4vR0NGZVRW2h0DHmqC1Fp6sLtryuYcZdhRnnjoYezWbBch5+E4c7Gh6JwpQYcfJSw+sVLohocBF1w6BmMckj7lGjQj1nWXNMZ/q0U+wrNCtxuI0YCxOypFmhMxZWxE06YSyUfZVVoau+oULxgiVnC5imbU1HeMkdG5sUJixHuS5LfYUswu15Bt1V92YPUBh1Jo+MPyjo827nPlyOSKGpg7rf0wqrNq/KMLYAFYJG2dyRY9DJU9F52ZQChUWeAYOVKjAt0hahMB8RJAOFic5RmE/kcgtvPBaWUqlU0eZJmcCZZhKsQK1MO4WgoSjmBTvinPMUikYMkwYMiIDznxMKPTpRoSTG2szIsWBGng/PyFamIudJFuXx6lwOZMi8pkkhZH+5hQxYzIuuHCjM8CLT9IlSKcltT2EsL4h3pEK7lCwVs25e2Kiw6KQY0F7km7qtEH7cFFm0Jy7aEpeBUmE4NzdF+pzntkgrg44Mw4ami+w6Z/kKs81jYQcphBbir0kchbrAbZPxirBQdOcLJuZelrPhPZ14VrWspIOU5Chk8gKaMBhNMN1kpkwrfYUwU8NdmWk2KtSCGVnrLIWgw1+JgrRStR+YEG+mg6xStTKX5+7LyBkZJlRLJiPgtiiXh3E5RYNCPuHUF8sQ0c0jOTZf5HEz3ApFJsSLVaMykZHqO11hPvScoNBFvhGkwJZtuWOZp9AAc3HZMy2rKv4BBkzMcc2UCt3VDhPLPRg7rbjNrWjj6sQUDi1brFAizGhcnXReUlO0F8IKI3GXqMxwJzK2bScj7hTBMnGRROvzJacWi9hFN+WrJOP9oq9OJ936chDVsjGoH3PFJUpxNxcyWTRjW3Y8P81kXliSN2R528vSRXS0ExQaphn+LCAO5VAoz8IqQctVgg8qbrQOJwwZ7a3sdNM0nIiG+ib08fmKN9Kawc3gwkZuXve/4bjVDXcbPne4HMH3wqYvci2f6Qx4k9YPfm5AOK75Q1+7+g0fCEH2gRduiT406Ks1GlKIhhSiIYVoSCEaUoiGFKIhhWhIIRpSiIYUoiGFaEghGlKIhhSiIYVoSCEaUoiGFKIhhWhIIRpSiIYUoiGFaEghGlKIhhSiIYVoSCEaUoiGFKIhhWhIIRpSiIYUoiGFaEghGlKIhhSiAYWMwBHVIgSO/P8BVISZfpYXDo0AAAAASUVORK5CYII=" alt="" />
                   <h4> Website:Pluralsight.com</h4>
                  <a  href="https://kapilkumar7.github.io/pluralsightclone" ><button>Netlify</button></a> 
                  <a href="https://github.com/KapilKumar7/pluralsightclone" > <button >Github</button></a>
                  
                   
                </div>
                <div className="project-box2">
                    <img className="ject"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVdkSo__nOkvJNtwyJCVEdtdEPDQKUV1DHw&usqp=CAU"alt="" />
                   <h4> Website:Orbitz.com</h4>
                   <button   href="http://our-orbitz-clone.netlify.app" >Netlify</button>
                   <button     href="https://github.com/jitesh-95/Orbitz">Github</button>
                </div>

        </div>
        </div>
    )
    
}
export default Project