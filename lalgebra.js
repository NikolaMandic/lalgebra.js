/**
 * This function initializes matrix
* @param {array,function} like [5,3,1],_.constant(0)
* @returns {matrix}  like [[0,0,0,0,0],[0,0,0],[0]]
*/
matrixe=(a,init)=>_.map(a,(i)=>_.times(i,()=>init(i)))
/** This function
* @param {number} input any number
* @returns {number} that number, plus one.
*/
matrix=(a,b,init)=>_.times(a,(i)=>_.times(b,(j)=>init(i,j)))
vecMul=(a,b)=>_.reduce(_.zipWith(a,b,(a,b)=>Math.pow(Math.E,(Math.log(a)+Math.log(b)))),_.add);
vecMul=(a,b)=>_.reduce(_.zipWith(a,b,_.multiply),_.add);
vecMule=(a,b)=>_.zipWith(a,b,_.multiply);
vecAdd=(a,b)=>_.zipWith(a,b,_.add)
vecSub=(a,b)=>_.zipWith(a,b,_.subtract)
vecDivs=(a,b)=>_.map(a,(v)=>v/b)
vecAdds=(a,b)=>_.map(a,(v)=>v+b)
norm = (a)=> Math.sqrt(_.reduce(_.zipWith(a,a,_.multiply),_.add));
n=normalize=(a)=>vecDivs(a,norm(a)||1)
vecDiv=(a,b)=>_.zipWith(a,b,_.divide);
vecMuls=(a,b)=>_.map(a,(v)=>v*b)
tr = (a)=>_.spread(_.zip)(a)
sigmoid=(t)=>1/(1+Math.pow(Math.E, -t));
vecMulMat=(a,b)=>_.map(tr(b),(v)=>vecMul(a,v));
matMulMat=(a,b)=>_.map(a,(v)=>vecMulMat(v,b))

matAdds=(a,b)=>_.map(a,(v)=>vecAdds(v,b))
matSubs=(a,b)=>_.map(a,(v)=>vecAdds(v,-b))
matMuls=(a,b)=>_.map(a,(v)=>vecMuls(v,b))
matDivs=(a,b)=>_.map(a,(v)=>vecDivs(v,b))

vecMuleVecTr = (a,b)=>_.map(b,(v)=>vecMuls(a,v));

matAddMat=(a,b)=>_.zipWith(a,b,(a,b)=>vecAdd(a,b))

vecSqrt=(a)=> _.map(a,Math.sqrt)
sigmoid=(t)=>1/(1+Math.pow(Math.E, -t));
