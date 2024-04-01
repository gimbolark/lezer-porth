import { LRParser } from '@lezer/lr';
import { styleTags, tags } from '@lezer/highlight';

const highlighting = styleTags({
    Number:     tags.number,
    String:     tags.string,
    Intrinsics: tags.literal,
    Keywords:   tags.keyword,
    Control:    tags.content
});

// This file was generated by lezer-generator. You probably shouldn't edit it.
const parser = LRParser.deserialize({
  version: 14,
  states: "hOVQPOOOOQO'#Cc'#CcQVQPOOOOQO-E6a-E6a",
  stateData: "h~OYOS~OQPORPOSPOTPOUPO~O",
  goto: "_WPPPPPPPXQQORRQ",
  nodeNames: "⚠ File Number String Intrinsics Keywords Control",
  maxTerm: 10,
  propSources: [highlighting],
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData: "*c~RlX^!ypq!yqr#nrs#yz{#t{|#t}!O#t!Q![$h!^!_$p!_!`#t!`!a$p#V#W$x#W#X%g#X#Y&[#]#^&w#`#a'r#a#b(O#c#d(k#d#e(}#k#l*P#y#z!y$f$g!y#BY#BZ!y$IS$I_!y$I|$JO!y$JT$JU!y$KV$KW!y&FU&FV!y~#OYY~X^!ypq!y#y#z!y$f$g!y#BY#BZ!y$IS$I_!y$I|$JO!y$JT$JU!y$KV$KW!y&FU&FV!y~#qP!_!`#t~#yOS~~#|TOr#yrs$]s;'S#y;'S;=`$b<%lO#y~$bOR~~$eP;=`<%l#y~$mPQ~!Q![$h~$uPS~!_!`#t~${P#c#d%O~%RP#b#c%U~%XP#g#h%[~%_P#h#i%b~%gOT~~%jR#c#d%s#f#g%x#i#j&U~%xOU~~%{P#c#d&O~&RP#d#e#t~&XP#d#e%b~&_Q#`#a&e#b#c&q~&hP#g#h&k~&nP#X#Y%s~&tP#W#X%s~&zQ#Y#Z%s#b#c'Q~'VPT~#V#W'Y~']P#`#a'`~'cP#i#j'f~'iP#W#X'l~'oP#X#Y%b~'uP#X#Y'x~'{P#h#i%s~(RQ#T#U(X#c#d(e~([P#]#^(_~(bP#b#c%b~(hP#W#X#t~(nP#j#k(q~(tP#X#Y(w~(zP#f#g%b~)QQ#f#g)W#i#j)s~)ZQ#]#^)a#c#d)m~)dP#b#c)g~)jP#h#i#t~)pP#V#W%b~)vP#h#i)y~)|P#g#h#t~*SP#[#]*V~*YP#]#^*]~*`P#`#a&k",
  tokenizers: [0],
  topRules: {"File":[0,1]},
  tokenPrec: 0
});

export { parser };
