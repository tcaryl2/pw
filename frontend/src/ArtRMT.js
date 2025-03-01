import "./Article.css";
import katex from "katex";
import "katex/dist/katex.min.css";

const ArtRMT = () => {
    function MathComponent({ equation }) {
        const html = katex.renderToString(equation, { throwOnError: false })
        return <span dangerouslySetInnerHTML={{ __html: html }} />;
    }

    return (
        <div className="article-template">
            <div className="article-header">
                <div className="article-title">
                    <h5>Solving an Unsolved Integral</h5>
                </div>
                <div className="date-author">
                    <h6>Timothy Caryl</h6><h6>August 1, 2024</h6> 
                </div>
            </div>
            <div className="article-content">
                <div className="article-left">
                    
                </div>
                <div className="article-body">
                    <section>
                        <div className="h7">
                            Background and Problem Statement
                        </div>
                        <p>
                            As part of my preparation for the 2023 William Lowell Putnam Mathematical Competition, I engaged in an extensive study of advanced integration techniques. This included converting integrals into Taylor series, parameterizing variables within the integral, and employing the gamma and beta functions to transform complex integrals into more manageable forms. Ramanujan's Master Theorem, a generalization of the gamma function derived by Srinivasa Ramanujan, was one of the more sophisticated tools I studied and proved invaluable for solving integrals that are otherwise intractable.
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\int_{0}^{\\infty} \\frac{1}{\\sum_{n=0}^{a-1} x^n} dx"} />
                        </p>
                        <p>
                            is a notable example of a challenging integral that can be solved with the theorem. During my preparation I assigned this problem to myself as practice, assuming that its simple form meant it had an established solution I could leverage to review advanced integration techniques. 
                        </p>
                        <p>
                            After a week of applying various methods without success and finding no solution online, I realized that I had inadvertently chosen an unsolved problem.
                        </p>
                        <p>
                            After a year of prodding, I was ultimately able to solve the integral using Ramanujan's Master Theorem and complex analysis. This period of experimentation and study was instrumental in equipping me with the necessary tools to address the issues with my solution and provided valuable insights into general problem solving strategies.
                        </p>
                    </section>
                    <section>
                        <div className="h7">
                            Ramanujan's Master Theorem  
                        </div>
                        <p>
                            The proof of Ramanujan's Master Theorem will not be detailed here due to its highly technical nature. However, the theorem itself can be succinctly expressed as follows:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\int_{0}^{\\infty} x^{t-1} \\cdot \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} a_n x^n \\, dx = a_{-t} \\cdot \\Gamma(t)"} />
                        </p>
                        <p>
                            The theorem asserts that if an improper integral with limits from zero to infinity can be rewritten to correspond with the -hand side of this equation - where <i>a<sub>n</sub></i> represents a sequence in terms of <i>n</i> - then the integral is equivalent to the expression on the -hand side of the equation. This expression is represented in terms of the gamma function and the negative t-th term of the sequence on the -hand side. 
                        </p>
                        <p>
                            A meaningful nuance is that the sequence <i>a<sub>n</sub></i> on the -hand side is defined for all natural numbers n, whereas the sequence on the -hand side must be defined for the real number -t. Consequently, <i>a<sub>n</sub></i> must have a defined value for n = -t on the -hand side of the theorem, and ideally for all real numbers. This means <i>a<sub>n</sub></i> acts like a function on the -hand side of the equation but a sequence on the  - and this is how the theorem is intended to work.
                        </p>
                        <p>
                            To illustrate the application of the theorem, we will use it to solve the following integral:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"A = \\int_{0}^{\\infty} \\frac{1000 x^3}{(x+2)^{5}} \\, dx"} />
                        </p>
                        <p>
                            The theorem is applicable if A can be reformulated to match the following form:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\int_{0}^{\\infty} x^{t-1} \\cdot \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} a_n x^n \\, dx"} />
                        </p>
                        <p>
                            This equation suggests converting the denominator of the integral into its Taylor series representation, which introduces an infinite sum into the integral while retaining the term in front. This can be achieved using the generalized binomial theorem, which states
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"(1+x)^\\alpha = \\sum_{n=0}^{\\infty} \\binom{\\alpha}{n} x^n"} />
                        </p>
                        <p>
                            for any real number alpha. For non-integer values of alpha the Generalzed Binomial Theorem uses 
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={ "\\binom{\\alpha}{n} = \\frac{\\alpha (\\alpha-1) (\\alpha-2) \\cdots (\\alpha-n+1)}{n!}"} />
                        </p>
                        <p>
                            Applying this to the denominator in the integral A and then using the binomial theorem to simplify:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{1}{(x+2)^5} = (x + 2)^{-5} = 2^{-5} (1 + \\frac{x}{2})^{-5}"} />
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\binom{-5}{n} = \\frac{(-5) (-6) (-7) \\cdots (-5 - n + 1)}{n!} = \\frac{(-1)^n (4+n)!}{4!n!}"} />
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"(1 + \\frac{x}{2})^{-5} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n (4+n)!}{4!n!} (\\frac{x}{2})^n"} />
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{1}{(x+2)^5} = \\frac{1}{32} \\sum_{n=0}^{\\infty} \\frac{(-1)^n (4+n)!}{4! \\cdot 2^n \\cdot n!} x^n"} />
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{1}{(x+2)^5} = \\sum_{n=0}^{\\infty} \\frac{(-1)^n (4+n)!}{4! \\cdot 2^{n+5} \\cdot n!} x^n"}/>
                        </p>
                        <p>
                            Substituting this expression into A yields:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\int_{0}^{\\infty} 1000 x^3 \\cdot \\frac{1}{(x+2)^5} dx ="}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\int_{0}^{\\infty} 1000 x^3 \\cdot \\sum_{n=0}^{\\infty} \\frac{(-1)^n (4+n)!}{4! \\cdot 2^{n+5} \\cdot n!} x^n dx"}/>
                        </p>
                        <p>
                            This can be expressed in a form that matches Ramanujan's Master Theorem:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"1000 \\int_{0}^{\\infty} x^{4-1} \\cdot \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} \\cdot \\frac{(4+n)!}{4! \\cdot 2^{n+5}} x^n dx"}/>
                        </p>
                        <p>
                            Which means <i>a<sub>n</sub></i> is given by
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{(4+n)!}{4! \\cdot 2^{n+5}}"}/>
                        </p>
                        <p>
                            Consequently, the value of the integral A is:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"- 1000 \\cdot \\Gamma(t) \\cdot a_{-t} ="}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"1000 \\cdot \\Gamma(4) \\cdot a_{-4} ="}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"1000 \\cdot 6 \\cdot \\frac{1}{24 \\cdot 2} = 125"}/>
                        </p>
                        <p>
                            This answer can be verified using a computer.
                        </p>
                    </section>
                    <section>
                        <div className="h7">
                            Solution to <MathComponent equation={"\\int_{0}^{\\infty} \\frac{1}{\\sum_{n=0}^{a-1} x^n} dx"}/>
                        </div>
                        <p>
                            To convert the integral into the required form for Ramanujan's Master Theorem the interior of the integral must be converted to its Taylor series expansion. This can be done using the identity:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{1}{\\sum_{n=0}^{a-1} x^n} = \\frac{x-1}{x^a-1}"}/>
                        </p>
                        <p>
                            From here it follows
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{x-1}{x^a-1} =  -\\sum_{n=0}^{\\infty} x^{a \\cdot n} \\cdot \\frac{x-1}{x^a-1} ="}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{x-1}{x^a-1} = (x-1) \\cdot \\frac{1}{x^a-1}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{1}{x^a-1} = -\\sum_{n=0}^{\\infty} x^{a \\cdot n}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{x-1}{x^a-1} = -(x-1) \\cdot \\sum_{n=0}^{\\infty} x^{a \\cdot n}"}/>
                        </p>
                        <p>
                            Using the u-substitution
                        </p> 
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"u=x^{a}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"u^{\\frac{1}{a}}=x"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"du = a \\cdot x^{a-1}dx"}/>
                        </p>
                        <p>
                            The bounds of integration remain the same because 
                            if x = 0 then u = 0
                            and if x = <MathComponent equation={"\\infty"}/> then u = <MathComponent equation={"\\infty"}/>. Performing the u-substitution results in the expression:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\int_{0}^{\\infty} (u^{1/a} - 1) \\sum_{n=0}^{\\infty} \\frac{du}{a \\cdot u^{(a-1)/a}} = \\frac{-1}{a} \\int_{0}^{\\infty} (u^{\\frac{2-a}{a}} - u^{\\frac{1-a}{a}}) \\sum_{n=0}^{\\infty} u^n, du"}/>
                        </p>
                        <p>
                            This expressions needs the term  <MathComponent equation={"\\frac{(-1)^n}{n!} "}/> inside the summation to match the Master Theorem's required form, which indicates that the inside of the sum should be multiplied by <MathComponent equation={"\\frac{(-1)^n}{n!} \\cdot \\frac{n!}{(-1)^n}"}/>  to get:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={" \\frac{-1}{a} \\int_{0}^{\\infty} (u^{\\frac{2-a}{a}} - u^{\\frac{1-a}{a}}) \\cdot \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} \\frac{n!}{(-1)^n} u^n du"}/>
                        </p>
                        <p>
                            This integral can be separated into two integrals and the Master Theorem can be applied individually to each one:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{-1}{a} (\\int_{0}^{\\infty} u^{\\frac{2}{a}-1} \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} \\cdot \\frac{n!}{(-1)^n} u^n du) +"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{1}{a} (\\int_{0}^{\\infty} u^{\\frac{1}{a}-1} \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} \\cdot \\frac{n!}{(-1)^n} u^n du"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\int_{0}^{\\infty} x^{t-1} \\cdot \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} a_n x^n dx = a_{-t} \\cdot \\Gamma(t)"}/>
                        </p>
                        <p>
                            The integrals are now in a form where Ramanujan's Master Theorem applies. In this case the sequence [[[[[[[]]]]]]] Applying the theorem to the two integrals results in the expression:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{-1}{a}\\frac{(-\\frac{2}{a})!}{(-1)^\\frac{-2}{a}} \\cdot (\\frac{2}{a}-1)! - \\frac{(-\\frac{1}{a})!}{(-1)^\\frac{-1}{a}} \\cdot (\\frac{1}{a}-1)!"}/>
                        </p>
                        <p>
                            The original integral is defined over the real numbers so the expression becomes:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{-1}{a}re[\\frac{(-\\frac{2}{a})!}{(-1)^\\frac{-2}{a}} \\cdot (\\frac{2}{a}-1)! - \\frac{(-\\frac{1}{a})!}{(-1)^\\frac{-1}{a}} \\cdot (\\frac{1}{a}-1)!]"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{-1}{a}[cos(\\frac{2 \\pi}{a})(-\\frac{2}{a})! \\cdot (\\frac{2}{a}-1)! - cos(\\frac{\\pi}{a})(-\\frac{1}{a})! \\cdot (\\frac{1}{a}-1)!]"}/>
                        </p>
                        <p>
                            This can be further simplified using Euler's Reflection Formula.
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\Gamma(1-z)  = \\frac{\\pi}{\\sin(\\pi z) \\cdot \\Gamma(z)}"}/>
                        </p>
                        <p>
                            Using the reflection formula on the terms 
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"(\\frac{2}{a}-1)!"}/> 
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"(\\frac{1}{a}-1)!"}/>
                        </p>
                        <p>yields</p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{\\pi}{(\\frac{-2}{a})! sin(\\frac{2 \\pi}{a})}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{\\pi}{(\\frac{-1}{a})! sin(\\frac{1 \\pi}{a})}"}/>
                        </p>
                        <p>
                            Substituting those into the expression from before gives the expression:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{-1}{a}[cos(\\frac{2 \\pi}{a})(-\\frac{2}{a})!\\frac{\\pi}{(\\frac{-2}{a})! sin(\\frac{2 \\pi}{a})} - cos(\\frac{\\pi}{a})(-\\frac{1}{a})! \\cdot \\frac{\\pi}{(\\frac{-1}{a})! \\cdot sin(\\frac{1 \\pi}{a})}]"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{-\\pi}{a} [\\frac{cos(\\frac{2 \\pi}{a})}{sin(\\frac{2 \\pi}{a})}-\\frac{cos(\\frac{\\pi}{a})}{sin(\\frac{\\pi}{a})} ]"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{-\\pi}{a} [cot(\\frac{2 \\pi}{a})-cot(\\frac{\\pi}{a})]"}/>
                        </p>
                        <p>
                            Difference of Cotangent Formula
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\cot(A) - \\cot(B) = \\frac{\\sin({B-A})}{\\sin(A)sin(B)}"}/>
                        </p>
                        <p>
                            Using the difference of cotangent formula the expression simplifies to
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{-\\pi}{a} \\cdot \\frac{\\sin(\\frac{-\\pi}{a})}{\\sin(\\frac{2 \\pi}{a}) \\sin(\\frac{\\pi}{a})}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{-\\pi}{a} \\cdot \\frac{-\\sin(\\frac{\\pi}{a})}{\\sin(\\frac{2 \\pi}{a}) \\sin(\\frac{\\pi}{a})}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{\\pi}{a} \\cdot \\frac{1}{\\sin(\\frac{2 \\pi}{a})}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{\\pi}{a} \\cdot \\frac{1}{\\sin(\\frac{2 \\pi}{a})}"}/>
                        </p>
                        <p>
                            For any integer a &gt; 2 the solution to the orignal integral is:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\int_{0}^{\\infty} \\frac{1}{\\sum_{n=0}^{a-1} x^n} dx = \\frac{\\pi}{a} \\cdot \\frac{1}{\\sin(\\frac{2 \\pi}{a})} = \\frac{1}{a} \\cdot (\\frac{2}{a}-1)! \\cdot (\\frac{-2}{a} )!"}/>
                        </p>
                    </section>
                    <section>
                        <div className="h7">
                            Additional Results
                        </div>
                        <p className="h7">
                            Limit of the Area Under the Curve
                        </p>
                        <p>
                            The orignal integral represents the area under the curve of the function
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{1}{\\sum_{n=0}^{a-1} x^n}"}/>
                        </p>
                        <p> a approaches <MathComponent equation={"\\infty"}/> the curve approaches a 45 degree  triangle with side length 1, meaning the area of the integral should approach <MathComponent equation={"\\frac{1}{2}"}/>.
                        </p>
                        <p>
                            This can be proven using L'Hopital's rule:
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\int_{0}^{\\infty} \\frac{1}{\\sum_{n=0}^{a-1} x^n} dx = \\frac{1}{a} \\frac{\\pi}{\\sin(\\frac{2\\pi}{a})}"}/>
                        </p>
                        <p>
                            When <MathComponent equation={"a = {\\infty}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{1}{a} \\frac{\\pi}{\\sin(\\frac{2\\pi}{a})} = \\frac{\\frac{\\pi}{{\\infty}}}{\\sin(\\frac{2\\pi}{{\\infty}})} = \\frac{0}{0}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{d}{da}\\frac{\\frac{\\pi}{a}}{\\sin\\frac{2\\pi}{a}} = \\frac{\\frac{-\\pi}{a^{2}}} {\\cos(\\frac{2 \\pi}{a}) \\cdot \\frac{-2 \\pi}{a^{2}}} = \\frac{\\frac{1}{2}} {\\cos(\\frac{2\\pi}{a})}"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            As <MathComponent equation={"a"}/> approaches <MathComponent equation={"\\infty"}/>
                        </p>
                        <p className="latex" style={{ display: "block", textAlign: "center" }}>
                            <MathComponent equation={"\\frac{\\frac{1}{2}} {\\cos(\\frac{2\\pi}{{\\infty}})} = \\frac{\\frac{1}{2}} {\\cos(0)} = \\frac{\\frac{1}{2}} {1} = \\frac{1}{2}"}/>
                        </p>
                        <p>
                            which converges to  <MathComponent equation={"\\frac{1}{2}"}/> as expected. This indicates the solution found above is correct.
                        </p>
                    </section>
                </div>
                <div className="article-right">
                    
                </div>
            </div>
        </div>
    );
}
 
export default ArtRMT;