// Efyrium atmospheric effects
class AtmPart{
  constructor(type){this.type=type;this.reset(true)}
  reset(init){
    const t=this.type,w=window.w||innerWidth,h=window.h||innerHeight;
    this.x=Math.random()*w;
    this.y=init?Math.random()*h:(['embers','fire','smoke','fog','sparks'].includes(t)?h+20:-20);
    this.ph=Math.random()*6.28;
    if(t==='snow'||t==='stars'){this.s=Math.random()*2.2+.5;this.vy=Math.random()*1.1+.3;this.vx=(Math.random()-.5)*.7;this.o=Math.random()*.55+.25;this.spin=Math.random()*.04+.01}
    else if(t==='rain'){this.s=Math.random()*1.2+.4;this.len=Math.random()*12+8;this.vy=Math.random()*8+6;this.vx=-1.2;this.o=.35+Math.random()*.3}
    else if(t==='embers'||t==='fire'||t==='sparks'){this.s=Math.random()*2.8+.5;this.vy=-(Math.random()*1.8+.4);this.vx=(Math.random()-.5)*.9;this.life=1;this.dec=Math.random()*.008+.003}
    else if(t==='smoke'||t==='fog'){this.s=Math.random()*90+40;this.vy=-(Math.random()*.3+.06);this.vx=(Math.random()-.5)*.5;this.o=Math.random()*.1+.03}
    else if(t==='orbs'||t==='neon'){this.s=Math.random()*16+6;this.vy=(Math.random()-.5)*.25;this.vx=(Math.random()-.5)*.25;this.o=Math.random()*.2+.08}
    else if(t==='ash'||t==='dust'||t==='sandwind'){this.s=Math.random()*2+.4;this.vy=Math.random()*.5+.1;this.vx=(Math.random()-.5)*.8;this.o=Math.random()*.35+.12}
    else if(t==='leaves'||t==='petals'||t==='feathers'||t==='blossom'){this.s=Math.random()*5+2;this.vy=Math.random()*.6+.2;this.vx=(Math.random()-.5)*1.2;this.o=.5+Math.random()*.4;this.spin=Math.random()*.08+.02;this.rot=Math.random()*6.28}
    else if(t==='fireflies'){this.s=Math.random()*2.5+1;this.vy=(Math.random()-.5)*.4;this.vx=(Math.random()-.5)*.4;this.o=.3}
    else if(t==='bubbles'){this.s=Math.random()*8+3;this.vy=-(Math.random()*.8+.2);this.vx=(Math.random()-.5)*.3;this.o=.15+Math.random()*.2}
    else if(t==='lightning'){this.life=0;this.cd=Math.random()*180+60;this.bolt=[]}
    else if(t==='aurora'){this.s=Math.random()*120+60;this.x=Math.random()*w;this.y=Math.random()*h*.45;this.o=.04+Math.random()*.06;this.vx=(Math.random()-.5)*.15}
    else if(t==='crystals'){this.s=Math.random()*4+2;this.vy=Math.random()*.4+.1;this.vx=(Math.random()-.5)*.3;this.o=.4+Math.random()*.4;this.rot=Math.random()*6.28}
    else if(t==='runes'){this.s=Math.random()*10+6;this.vy=-(Math.random()*.2+.05);this.vx=(Math.random()-.5)*.2;this.o=.2+Math.random()*.3;this.rot=Math.random()*6.28}
    else if(t==='comets'){this.s=Math.random()*1.5+.5;this.vx=-(Math.random()*4+2);this.vy=Math.random()*1.5+.5;this.o=.6;this.len=Math.random()*30+15}
    else if(t==='hearts'||t==='butterflies'){this.s=Math.random()*6+3;this.vy=-(Math.random()*.4+.1);this.vx=(Math.random()-.5)*.8;this.o=.4+Math.random()*.4;this.ph=Math.random()*6.28}
    else{this.s=Math.random()*2+.5;this.vy=Math.random()*.5+.1;this.vx=(Math.random()-.5)*.4;this.o=.3}
  }
  update(){
    const t=this.type,w=window.w||innerWidth,h=window.h||innerHeight;
    if(t==='lightning'){this.cd--;if(this.cd<=0){this.life=8+Math.random()*6;this.cd=120+Math.random()*200;this.bolt=[];let bx=Math.random()*w,by=0;this.bolt.push([bx,by]);while(by<h){bx+=(Math.random()-.5)*40;by+=15+Math.random()*25;this.bolt.push([bx,by])}}if(this.life>0)this.life--;return}
    if(t==='snow'||t==='stars'){this.ph+=this.spin||.02;this.x+=Math.sin(this.ph)*.4+this.vx;this.y+=this.vy;if(this.y>h+8)this.reset()}
    else if(t==='rain'){this.x+=this.vx;this.y+=this.vy;if(this.y>h+10)this.reset()}
    else if(t==='embers'||t==='fire'||t==='sparks'){this.x+=this.vx;this.y+=this.vy;this.life-=this.dec;if(this.life<=0||this.y<-12)this.reset()}
    else if(t==='smoke'||t==='fog'){this.x+=this.vx;this.y+=this.vy;this.s+=0.05;if(this.y<-this.s)this.reset()}
    else if(t==='orbs'||t==='neon'||t==='fireflies'){this.ph+=0.02;this.x+=Math.sin(this.ph)*.4+this.vx;this.y+=Math.cos(this.ph*.7)*.25+this.vy;if(this.x<-50||this.x>w+50||this.y<-50||this.y>h+50)this.reset(true)}
    else if(t==='leaves'||t==='petals'||t==='feathers'||t==='blossom'){this.rot+=this.spin;this.x+=Math.sin(this.rot)*0.8+this.vx;this.y+=this.vy;if(this.y>h+15)this.reset()}
    else if(t==='bubbles'){this.x+=Math.sin(this.ph)*0.3+this.vx;this.y+=this.vy;this.ph+=0.03;if(this.y<-15)this.reset()}
    else if(t==='aurora'){this.x+=this.vx;this.ph+=0.01;if(this.x<-this.s||this.x>w+this.s)this.vx*=-1}
    else if(t==='comets'){this.x+=this.vx;this.y+=this.vy;if(this.x<-50||this.y>h+30)this.reset()}
    else if(t==='hearts'||t==='butterflies'){this.ph+=0.04;this.x+=Math.sin(this.ph)*.6+this.vx;this.y+=this.vy;if(this.y<-20||this.y>h+20)this.reset()}
    else{this.ph+=0.02;this.x+=Math.sin(this.ph)*.3+this.vx;this.y+=this.vy;if(this.y>h+15)this.reset()}
  }
  draw(){
    const t=this.type,hex=(window.atmCol&&window.atmCol[t])||'#888';
    const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
    const mult=((window.atmInt&&window.atmInt[t])||40)/100;
    const atmCtx=window.atmCtx;if(!atmCtx)return;
    const w=window.w||innerWidth,h=window.h||innerHeight;
    if(t==='lightning'){if(this.life<=0||!this.bolt||this.bolt.length<2)return;atmCtx.strokeStyle=`rgba(${r},${g},${b},${0.55*mult*(this.life/10)})`;atmCtx.lineWidth=1.5+Math.random();atmCtx.beginPath();atmCtx.moveTo(this.bolt[0][0],this.bolt[0][1]);for(let i=1;i<this.bolt.length;i++)atmCtx.lineTo(this.bolt[i][0],this.bolt[i][1]);atmCtx.stroke();if(this.life>5){atmCtx.fillStyle=`rgba(${r},${g},${b},${0.04*mult})`;atmCtx.fillRect(0,0,w,h)}return}
    if(t==='rain'){atmCtx.strokeStyle=`rgba(${r},${g},${b},${this.o*mult})`;atmCtx.lineWidth=1;atmCtx.beginPath();atmCtx.moveTo(this.x,this.y);atmCtx.lineTo(this.x+this.vx*1.5,this.y+this.len);atmCtx.stroke();return}
    if(t==='comets'){const gr=atmCtx.createLinearGradient(this.x,this.y,this.x-this.vx*3,this.y-this.vy*3);gr.addColorStop(0,`rgba(${r},${g},${b},${this.o*mult})`);gr.addColorStop(1,`rgba(${r},${g},${b},0)`);atmCtx.strokeStyle=gr;atmCtx.lineWidth=this.s;atmCtx.beginPath();atmCtx.moveTo(this.x,this.y);atmCtx.lineTo(this.x-this.vx*4,this.y-this.vy*4);atmCtx.stroke();return}
    if(t==='leaves'||t==='petals'||t==='blossom'||t==='feathers'){atmCtx.save();atmCtx.translate(this.x,this.y);atmCtx.rotate(this.rot||0);atmCtx.fillStyle=`rgba(${r},${g},${b},${this.o*mult})`;atmCtx.beginPath();if(t==='feathers')atmCtx.ellipse(0,0,this.s*.4,this.s,0,0,6.28);else atmCtx.ellipse(0,0,this.s*.7,this.s*.4,0,0,6.28);atmCtx.fill();atmCtx.restore();return}
    if(t==='hearts'){atmCtx.save();atmCtx.translate(this.x,this.y);atmCtx.scale(this.s/8,this.s/8);atmCtx.fillStyle=`rgba(${r},${g},${b},${this.o*mult})`;atmCtx.beginPath();atmCtx.moveTo(0,3);atmCtx.bezierCurveTo(-5,-2,-8,2,0,8);atmCtx.bezierCurveTo(8,2,5,-2,0,3);atmCtx.fill();atmCtx.restore();return}
    if(t==='butterflies'){atmCtx.save();atmCtx.translate(this.x,this.y);const wing=Math.sin(this.ph)*0.5+0.8;atmCtx.fillStyle=`rgba(${r},${g},${b},${this.o*mult})`;atmCtx.beginPath();atmCtx.ellipse(-this.s*.5,0,this.s*.5*wing,this.s*.35,0,0,6.28);atmCtx.fill();atmCtx.beginPath();atmCtx.ellipse(this.s*.5,0,this.s*.5*wing,this.s*.35,0,0,6.28);atmCtx.fill();atmCtx.restore();return}
    if(t==='runes'||t==='crystals'){atmCtx.save();atmCtx.translate(this.x,this.y);atmCtx.rotate(this.rot||this.ph||0);atmCtx.strokeStyle=`rgba(${r},${g},${b},${this.o*mult})`;atmCtx.lineWidth=1.2;atmCtx.beginPath();if(t==='crystals'){atmCtx.moveTo(0,-this.s);atmCtx.lineTo(this.s*.6,0);atmCtx.lineTo(0,this.s);atmCtx.lineTo(-this.s*.6,0);atmCtx.closePath()}else{atmCtx.moveTo(0,-this.s);atmCtx.lineTo(0,this.s);atmCtx.moveTo(-this.s*.7,0);atmCtx.lineTo(this.s*.7,0);atmCtx.moveTo(-this.s*.4,-this.s*.5);atmCtx.lineTo(this.s*.4,-this.s*.5)}atmCtx.stroke();atmCtx.restore();return}
    if(t==='fireflies'){const blink=0.3+0.7*(0.5+0.5*Math.sin(this.ph*3));const gr=atmCtx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.s*3);gr.addColorStop(0,`rgba(${r},${g},${b},${this.o*mult*blink})`);gr.addColorStop(1,`rgba(${r},${g},${b},0)`);atmCtx.beginPath();atmCtx.arc(this.x,this.y,this.s*3,0,6.28);atmCtx.fillStyle=gr;atmCtx.fill();return}
    if(t==='embers'||t==='fire'||t==='sparks'){const gr=atmCtx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.s*2.5);gr.addColorStop(0,`rgba(${r},${g},${b},${this.life*.85*mult})`);gr.addColorStop(0.5,`rgba(${r},${Math.min(255,g+40)},0,${this.life*.3*mult})`);gr.addColorStop(1,`rgba(${r},${g},${b},0)`);atmCtx.beginPath();atmCtx.arc(this.x,this.y,this.s*2.5,0,6.28);atmCtx.fillStyle=gr;atmCtx.fill();return}
    if(t==='smoke'||t==='fog'||t==='aurora'){const gr=atmCtx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.s);gr.addColorStop(0,`rgba(${r},${g},${b},${this.o*mult})`);gr.addColorStop(1,`rgba(${r},${g},${b},0)`);atmCtx.beginPath();atmCtx.arc(this.x,this.y,this.s,0,6.28);atmCtx.fillStyle=gr;atmCtx.fill();return}
    if(t==='orbs'||t==='neon'){const pulse=0.7+0.3*Math.sin(this.ph*2);const gr=atmCtx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.s);gr.addColorStop(0,`rgba(${r},${g},${b},${this.o*mult*pulse})`);gr.addColorStop(0.4,`rgba(${r},${g},${b},${this.o*mult*.3*pulse})`);gr.addColorStop(1,`rgba(${r},${g},${b},0)`);atmCtx.beginPath();atmCtx.arc(this.x,this.y,this.s,0,6.28);atmCtx.fillStyle=gr;atmCtx.fill();return}
    if(t==='bubbles'){atmCtx.strokeStyle=`rgba(${r},${g},${b},${this.o*mult})`;atmCtx.lineWidth=1;atmCtx.beginPath();atmCtx.arc(this.x,this.y,this.s,0,6.28);atmCtx.stroke();atmCtx.beginPath();atmCtx.arc(this.x-this.s*.3,this.y-this.s*.3,this.s*.2,0,6.28);atmCtx.fillStyle=`rgba(255,255,255,${this.o*mult*.5})`;atmCtx.fill();return}
    const a=(this.o||.2)*mult;const gr=atmCtx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.s*2.5);gr.addColorStop(0,`rgba(${r},${g},${b},${a})`);gr.addColorStop(1,`rgba(${r},${g},${b},0)`);atmCtx.beginPath();atmCtx.arc(this.x,this.y,this.s*2.5,0,6.28);atmCtx.fillStyle=gr;atmCtx.fill();
  }
}
function initAtm(){
  window.atmParts=[];
  const types=Object.keys(window.atm||{});
  const counts={snow:26,rain:32,embers:20,fire:18,smoke:14,fog:12,orbs:10,ash:18,leaves:16,petals:16,fireflies:14,dust:20,bubbles:12,lightning:3,aurora:7,stars:22,crystals:12,feathers:10,runes:9,comets:7,sparks:16,blossom:16,sandwind:18,neon:10,hearts:10,butterflies:9};
  types.forEach(type=>{
    if(!window.atm[type])return;
    const base=counts[type]||14;
    const n=Math.floor(((window.atmInt[type]||40)/100)*base);
    for(let i=0;i<n;i++)window.atmParts.push(new AtmPart(type));
  });
}
window.AtmPart=AtmPart;window.initAtm=initAtm;
