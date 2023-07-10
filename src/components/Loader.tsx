import React from "react";

const Loader: React.FC<{}> =()=> {

    return(
        <div className="preloader">
		<div id="handle-preloader" className="handle-preloader">
			<div className="animation-preloader">
				<div className="spinner"></div>
				<div className="txt-loading">
                   <span data-text-preloader="p" className="letters-loading">p</span>
					<span data-text-preloader="r" className="letters-loading">r</span>
					<span data-text-preloader="o" className="letters-loading">o</span>
					<span data-text-preloader="a" className="letters-loading">a</span>
					<span data-text-preloader="g" className="letters-loading">g</span>
					<span data-text-preloader="r" className="letters-loading">r</span>                     
					<span data-text-preloader="i" className="letters-loading">i</span>
					<span data-text-preloader="c" className="letters-loading">c</span> 
					<span data-text-preloader="a" className="letters-loading">a</span> 
				</div>
			</div>
		</div>
	</div>
    )
}
export default Loader;