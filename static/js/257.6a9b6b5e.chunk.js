"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[257],{257:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var s,i,t,c=r(439),o=r(791),a=r(689),d=r(87),l=r(501),h=r(168),x=r(686),p=x.Z.img(s||(s=(0,h.Z)(["\n  width: 300px;\n"]))),u=x.Z.div(i||(i=(0,h.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),v=x.Z.div(t||(t=(0,h.Z)(["\n  margin-top: 10px;\n  padding: 15px;\n  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);\n"]))),j=r(184),f=function(){var e,n,r=(0,a.UO)().id,s=(0,o.useState)({}),i=(0,c.Z)(s,2),t=i[0],h=i[1],x=(0,a.TH)(),f=(0,o.useRef)(null!==(e=null===(n=x.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,o.useEffect)((function(){(0,l.v)("movie/".concat(r,"?")).then((function(e){h(function(e){var n=e.title,r=e.release_date,s=e.overview,i=e.genres,t=e.poster_path,c=e.vote_average,o=r.slice(0,4)||"Year is unknown",a=Math.round(10*c),d=i.map((function(e){return e.name})).join(", ");return{title:n,year:o,userScore:a,overview:s,posterPath:t?"https://image.tmdb.org/t/p/w500".concat(t):"http://dummyimage.com/300x450/99cccc.jpg&text=Poster",genresList:d}}(e))}))}),[r]);var g=t.title,m=t.year,w=t.userScore,_=t.overview,b=t.posterPath,k=t.genresList;return(0,j.jsxs)("div",{children:[(0,j.jsx)(d.rU,{to:f.current,children:"Go back"}),(0,j.jsxs)(u,{children:[(0,j.jsx)(p,{src:b,alt:"poster"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{children:[g," (",m,")"]}),(0,j.jsxs)("p",{children:[" user score: ",w,"%"]}),(0,j.jsx)("h3",{children:"Overview "}),(0,j.jsxs)("p",{children:[" ",_," "]}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsxs)("p",{children:[" ",k," "]})]})]}),(0,j.jsxs)(v,{children:[(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,j.jsx)(o.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading subpage..."}),children:(0,j.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=257.6a9b6b5e.chunk.js.map