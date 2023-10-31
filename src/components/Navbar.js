import React from 'react'
import "./navbar.css"
import logoo from './assests/iso-27001.webp'
const a2Elements = document.querySelectorAll('.eles');
const cards = document.querySelectorAll('.carder');
console.log(a2Elements);
const imagy = document.getElementById("img1");
cards.forEach((element) => {
  element.addEventListener('click', function () {
    const eles = element.querySelector(".eles");
    console.log(eles.dataset.imagurl);
    imagy.src = eles.dataset.imagurl;
    imagy.classList.add('image-transition');
    a2Elements.forEach((el) => {
      el.classList.remove('a2');
    });
    eles.classList.add('a2');
  });

});
const method_zero = () => {
  document.getElementById('dropdown1').style.display = 'none';
}

const method0 = () => {
  document.getElementById('dropdown1').style.display = 'block';
}

const method = () => {
  document.getElementById('dropdown2').style.display = 'none';
}

const method1 = () => {
  document.getElementById('dropdown2').style.display = 'block';
}

const method2 = () => {
  document.getElementById('dropdown3').style.display = 'none';
}

const method3 = () => {
  document.getElementById('dropdown3').style.display = 'block';
}
const Navbar= () => {
  return (
  
<div className="d-flex flex-column justify-content-center w-100 h-100 navbarClass">
    <div className="firstSectionContainer">
      <div className="navBarConntainer">
        <div className="logo">
          
        </div>
        <div className="middleOptions">
          <div className="borderButton">
            <a className="factLinkContainer" href="/expertise/facturation-electronique/">
              Facturation électronique
              2024
            </a>
          </div>
          <div className="addOption" onMouseOver={()=>method0()} onMouseLeave={()=>method_zero()}>
            <span>Expertise</span>
            <span id="dropdown1" className="hover-target submenu absolute group-hover:transition duration-300 shadow-xl">
              <div className="bg-white text-gray-700 w-auto rounded-lg mt-[15px] p-12">
                <div className="flex gap-5">
                  <div className="w-[270px] border-r pr-4"><label
                      className="text-xl font-semibold font-heading ">NOTRE<br/>EXPERTISE</label>
                    <p className="text-base text-gray-600 font-heading mt-2">Optimisez vos échanges de données B2B au profit
                      de votre productivité en adéquation avec vos exigences sectorielles</p>
                  </div>
                  <div className="text-base font-heading pl-4 flex flex-col justify-center">
                    <ul className="leading-8 text-esalink-orange">
                      <li className="font-semibold hover:opacity-90"><a href="/expertise/edi/">EDI - L'échange de Données
                          Informatisé</a></li>
                      <li className="font-semibold hover:opacity-90 mt-2"><a href="/expertise/facturation-electronique/">La
                          facturation électronique</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="addOption" onMouseOver={()=>method1()} onMouseLeave={()=>method()}>
            <span>Solutions</span>
            <span id="dropdown2" className="hover-target submenu absolute group-hover:transition duration-300 shadow-xl">
              <div className="bg-white text-gray-700 w-auto rounded-lg mt-[15px] p-12">
                <div className="flex gap-5">
                  <div className="w-[270px] border-r pr-4"><label
                      className="text-xl font-semibold font-heading ">NOS<br/>SOLUTIONS</label>
                    <p className="text-base text-gray-600 font-heading mt-2">Catalysez la collaboration au sein de votre
                      écosystème à travers une large gamme de solutions de dématérialisation adaptées à vos besoins</p>
                  </div>
                  <div className="text-base font-heading pl-4 ">
                    <div className="border-b mb-3 pb-2"><a className="font-semibold hover:text-esalink-orange"
                        href="/solutions/">Nos solutions</a></div>
                    <div className="flex gap-10 justify-center ">
                      <ul className="leading-8">
                        <li className="font-semibold">On premise</li>
                        <li className="text-esalink-orange hover:opacity-90"><a
                            href="/solutions/tradexpress/">TradeXpress</a>
                        </li>
                        <li className="text-esalink-orange hover:opacity-90"><a href="/solutions/ibm-sterling/">IBM
                            Sterling</a></li>
                        <li className="text-esalink-orange hover:opacity-90"><a href="/solutions/cleo/">Cleo</a></li>
                      </ul>
                      <ul className="leading-8">
                        <li className="font-semibold">Cloud</li>
                        <li className="text-esalink-orange hover:opacity-90"><a href="/solutions/hubtimize/">Hubtimize®</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="addOption" onMouseOver={()=>method3()} onMouseLeave={()=>method2()}>
            <span>Services</span>
            <div id="dropdown3" className="hover-target submenu absolute group-hover:transition duration-300 shadow-xl">
              <div className="bg-white text-gray-700 w-auto rounded-lg mt-[15px] p-12">
                <div className="flex gap-5">
                  <div className="w-[270px] border-r pr-4"><label
                      className="text-xl font-semibold font-heading ">NOS<br/>SERVICES</label>
                    <p className="text-base text-gray-600 font-heading mt-2">Optimisez vos échanges de données B2B au profit
                      de votre productivité en adéquation avec vos exigences sectorielles</p>
                  </div>
                  <div className="text-base font-heading pl-4 flex flex-col justify-center">
                    <div className="border-b mb-3 pb-2"><a className="font-semibold hover:text-esalink-orange"
                        href="/nos-services/">Nos services</a></div>
                    <div className="flex gap-10 justify-center">
                      <ul className="leading-8 text-esalink-orange">
                        <li className="font-semibold hover:opacity-90 "><a href="/nos-services/tma/">TMA - Tierce
                            maintenance
                            applicative</a></li>
                        <li className="font-semibold hover:opacity-90"><a href="/nos-services/regie/">Régie</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="addOption">
            Blog
          </div>
        </div>
        <div className="addOption">
        Obtenir une démo
          </div>
        
        <div className="fropt">
          <select name="cars" id="cars">
            <option value="volvo">FR</option>
            <option value="saab">En</option>
            <option value="mercedes">Tr</option>
          </select>
        </div>
      </div>
    </div>
    <div className="mainBodyContainer">

      <div className="imageContainer">
        <img
          src={logoo}
          className="webIconImage"></img>
      </div>
      <h1 className="HeadingContainer">
        La dématérialisation
        <br/>
        au service de votre business
      </h1>
      <div className="descriptionTextContainer">
        Esalink vous accompagne dans la digitalisation de vos flux B2B
      </div>
      <div className="twoButttonContainer">
        <div className="buttons">Trouver votre solution EDI</div>
        <div className="buttons">Passer à la facturation électronique</div>
      </div>
      <img src="https://www.esalink.com/_next/static/media/globe_white_block.6699e2aa.svg" className="globeIcon" alt=""></img>
      <div className="bottomImageIcons">
        <img
          src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgenerix-white.e5ab8b0c.webp&w=256&q=75"
          alt="" className="bootomIcons"></img>
        <img
          src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcleo-white.ad4618e5.webp&w=128&q=75"
          alt="" className="bootomIcons"></img>
        <img
          src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FHUBTIMIZE-white.19537ec6.webp&w=256&q=75"
          alt="" className="bootomIcons"></img>
        <img
          src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fibm-white.7d4e8780.webp&w=128&q=75"
          alt="" className="bootomIcons"></img>
        <img
          src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgs1-white.c6b5f462.webp&w=128&q=75"
          alt="" className="bootomIcons"></img>
        <img
          src="https://www.esalink.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffne-white.f8c056bc.webp&w=640&q=75"
          alt="" className="bootomIcons"></img>
      </div>
    </div>
</div>
   
  )
}

export default Navbar;
