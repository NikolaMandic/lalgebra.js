/**
 * Initializes multidimensional array
 * first argument is the dimensions. Second is the function that will provide initialization value
* @param {array,function} like [5,3,1],_.constant(0)
* @returns {matrix}  like [[0,0,0,0,0],[0,0,0],[0]]
*/
matrixe=(a,init)=>_.map(a,(i)=>_.times(i,()=>init(i)))
/** Initializes multidimensional array
 * first argument is x and second is y dimension. Third argumentis the function that will provide initialization value and that functions recieves i,j as parameters
* @param {number,number,function} like 2,3,_.constant(0)
* @returns {matrix}  like [[0,0,0],[0,0,0]]
*/
matrix=(a,b,init)=>_.times(a,(i)=>_.times(b,(j)=>init(i,j)))
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecMul=(a,b)=>_.reduce(_.zipWith(a,b,(a,b)=>Math.pow(Math.E,(Math.log(a)+Math.log(b)))),_.add);
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecMul=(a,b)=>_.reduce(_.zipWith(a,b,_.multiply),_.add);
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecMule=(a,b)=>_.zipWith(a,b,_.multiply);
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecAdd=(a,b)=>_.zipWith(a,b,_.add)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecSub=(a,b)=>_.zipWith(a,b,_.subtract)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecDivs=(a,b)=>_.map(a,(v)=>v/b)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecAdds=(a,b)=>_.map(a,(v)=>v+b)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
norm = (a)=> Math.sqrt(_.reduce(_.zipWith(a,a,_.multiply),_.add));
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
n=normalize=(a)=>vecDivs(a,norm(a)||1)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecDiv=(a,b)=>_.zipWith(a,b,_.divide);
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecMuls=(a,b)=>_.map(a,(v)=>v*b)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
tr = (a)=>_.spread(_.zip)(a)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
sigmoid=(t)=>1/(1+Math.pow(Math.E, -t));
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecMulMat=(a,b)=>_.map(tr(b),(v)=>vecMul(a,v));
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matMulMat=(a,b)=>_.map(a,(v)=>vecMulMat(v,b))

/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matAdds=(a,b)=>_.map(a,(v)=>vecAdds(v,b))
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matSubs=(a,b)=>_.map(a,(v)=>vecAdds(v,-b))
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matMuls=(a,b)=>_.map(a,(v)=>vecMuls(v,b))
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matDivs=(a,b)=>_.map(a,(v)=>vecDivs(v,b))

/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecMuleVecTr = (a,b)=>_.map(b,(v)=>vecMuls(a,v));

/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matAddMat=(a,b)=>_.zipWith(a,b,(a,b)=>vecAdd(a,b))

/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
vecSqrt=(a)=> _.map(a,Math.sqrt)
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
sigmoid=(t)=>1/(1+Math.pow(Math.E, -t));
