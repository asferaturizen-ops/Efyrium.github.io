// Atmosphere themes — one-click ready moods (no text settings)
const ATM_THEMES = [
  {id:'autumn',name:'Осенний лес',emoji:'🍂',cat:'nature',bg:['#1a1008','#2a1810','#3d2418'],part:'#d97706',int:14,mode:'soft',band:30,edge:42,
    fx:{leaves:1,dust:1},col:{leaves:'#ea580c',dust:'#a16207'},ival:{leaves:55,dust:40}},
  {id:'summer',name:'Летний лес',emoji:'🌿',cat:'nature',bg:['#0a1a0c','#0f2414','#163020'],part:'#4ade80',int:12,mode:'wide',band:36,edge:28,
    fx:{leaves:1,fireflies:1,butterflies:1},col:{leaves:'#22c55e',fireflies:'#fde047',butterflies:'#a3e635'},ival:{leaves:40,fireflies:45,butterflies:35}},
  {id:'fall_leaves',name:'Падающие листья',emoji:'🍁',cat:'nature',bg:['#1c1008','#2a160c','#3b1f10'],part:'#f97316',int:10,mode:'soft',band:28,edge:38,
    fx:{leaves:1,dust:1},col:{leaves:'#f97316',dust:'#b45309'},ival:{leaves:70,dust:35}},
  {id:'breeze',name:'Ветерок',emoji:'🍃',cat:'nature',bg:['#0c1418','#122028','#1a2c36'],part:'#94a3b8',int:10,mode:'float',band:32,edge:30,
    fx:{feathers:1,dust:1,petals:1},col:{feathers:'#e2e8f0',dust:'#94a3b8',petals:'#fce7f3'},ival:{feathers:40,dust:30,petals:25}},
  {id:'sakura',name:'Сакура',emoji:'🌸',cat:'nature',bg:['#140c12','#1c1018','#281420'],part:'#f9a8d4',int:12,mode:'float',band:32,edge:34,
    fx:{blossom:1,petals:1,butterflies:1},col:{blossom:'#fbcfe8',petals:'#f9a8d4',butterflies:'#e879f9'},ival:{blossom:55,petals:45,butterflies:30}},
  {id:'swamp',name:'Болото',emoji:'🐸',cat:'nature',bg:['#0a1208','#101a0c','#162412'],part:'#84cc16',int:8,mode:'soft',band:28,edge:42,
    fx:{fog:1,fireflies:1,bubbles:1},col:{fog:'#3f6212',fireflies:'#a3e635',bubbles:'#65a30d'},ival:{fog:50,fireflies:40,bubbles:25}},
  {id:'desert',name:'Пустыня',emoji:'🏜',cat:'nature',bg:['#1a1208','#261a0c','#342414'],part:'#fbbf24',int:12,mode:'wide',band:36,edge:28,
    fx:{sandwind:1,dust:1},col:{sandwind:'#fbbf24',dust:'#d97706'},ival:{sandwind:60,dust:40}},

  {id:'rain',name:'Дождь',emoji:'🌧',cat:'weather',bg:['#0a1018','#0e1822','#142030'],part:'#7dd3fc',int:8,mode:'cinema',band:22,edge:48,
    fx:{rain:1,fog:1},col:{rain:'#7dd3fc',fog:'#64748b'},ival:{rain:65,fog:40}},
  {id:'storm',name:'Гроза',emoji:'⛈',cat:'weather',bg:['#060a12','#0a101c','#101828'],part:'#e0f2fe',int:6,mode:'cinema',band:18,edge:55,
    fx:{rain:1,lightning:1,fog:1},col:{rain:'#93c5fd',lightning:'#e0f2fe',fog:'#475569'},ival:{rain:70,lightning:50,fog:35}},
  {id:'night_fog',name:'Туман ночи',emoji:'🌫️',cat:'weather',bg:['#05080e','#0a0e16','#10141e'],part:'#64748b',int:6,mode:'soft',band:26,edge:52,
    fx:{fog:1,smoke:1,orbs:1},col:{fog:'#475569',smoke:'#334155',orbs:'#94a3b8'},ival:{fog:55,smoke:35,orbs:25}},
  {id:'morning_mist',name:'Утренний туман',emoji:'🌅',cat:'weather',bg:['#12100e','#1c1814','#282018'],part:'#fde68a',int:10,mode:'wide',band:38,edge:32,
    fx:{fog:1,dust:1,fireflies:1},col:{fog:'#a8a29e',dust:'#d6d3d1',fireflies:'#fde68a'},ival:{fog:45,dust:30,fireflies:30}},
  {id:'snow',name:'Снег',emoji:'❄️',cat:'weather',bg:['#0a1219','#0f1c28','#152433'],part:'#e2e8f0',int:12,mode:'soft',band:30,edge:40,
    fx:{snow:1,stars:1,crystals:1},col:{snow:'#f1f5f9',stars:'#e2e8f0',crystals:'#a5f3fc'},ival:{snow:60,stars:35,crystals:30}},
  {id:'blizzard',name:'Снежная буря',emoji:'🌨',cat:'weather',bg:['#080e14','#0c1520','#121c28'],part:'#cbd5e1',int:8,mode:'cinema',band:20,edge:50,
    fx:{snow:1,fog:1},col:{snow:'#f8fafc',fog:'#94a3b8'},ival:{snow:85,fog:45}},
  {id:'aurora_sky',name:'Северное сияние',emoji:'🌌',cat:'weather',bg:['#04060e','#080c18','#0e1424'],part:'#34d399',int:10,mode:'wide',band:34,edge:36,
    fx:{aurora:1,stars:1,snow:1},col:{aurora:'#34d399',stars:'#e0f2fe',snow:'#f1f5f9'},ival:{aurora:55,stars:45,snow:25}},

  {id:'fire',name:'Огненная',emoji:'🔥',cat:'elements',bg:['#140806','#1c0c08','#281208'],part:'#f97316',int:16,mode:'pulse',band:26,edge:40,
    fx:{fire:1,embers:1,sparks:1,ash:1},col:{fire:'#ef4444',embers:'#f97316',sparks:'#fbbf24',ash:'#a1a1aa'},ival:{fire:55,embers:50,sparks:40,ash:30}},
  {id:'water',name:'Водяная',emoji:'💧',cat:'elements',bg:['#061018','#0a1824','#0e2230'],part:'#22d3ee',int:12,mode:'wide',band:34,edge:30,
    fx:{bubbles:1,rain:1,orbs:1},col:{bubbles:'#67e8f9',rain:'#22d3ee',orbs:'#a5f3fc'},ival:{bubbles:50,rain:30,orbs:35}},
  {id:'ocean',name:'Глубокий океан',emoji:'🌊',cat:'elements',bg:['#020810','#061018','#0a1824'],part:'#0ea5e9',int:8,mode:'cinema',band:22,edge:50,
    fx:{bubbles:1,orbs:1,fog:1},col:{bubbles:'#38bdf8',orbs:'#0ea5e9',fog:'#1e3a5f'},ival:{bubbles:40,orbs:35,fog:40}},
  {id:'volcano',name:'Вулкан',emoji:'🌋',cat:'elements',bg:['#140806','#1e0c08','#2a140c'],part:'#f97316',int:14,mode:'pulse',band:24,edge:44,
    fx:{fire:1,embers:1,ash:1,smoke:1},col:{fire:'#dc2626',embers:'#f97316',ash:'#78716c',smoke:'#44403c'},ival:{fire:60,embers:50,ash:40,smoke:35}},
  {id:'cold',name:'Холодный биом',emoji:'🧊',cat:'elements',bg:['#0a1219','#0e1a24','#142230'],part:'#67e8f9',int:10,mode:'sharp',band:28,edge:38,
    fx:{snow:1,crystals:1,aurora:1},col:{snow:'#e0f2fe',crystals:'#a5f3fc',aurora:'#22d3ee'},ival:{snow:40,crystals:45,aurora:40}},
  {id:'crystal_cave',name:'Кристальная пещера',emoji:'💎',cat:'elements',bg:['#080c14','#0e1420','#141c2c'],part:'#a5f3fc',int:12,mode:'sharp',band:28,edge:36,
    fx:{crystals:1,orbs:1,sparks:1},col:{crystals:'#67e8f9',orbs:'#a5f3fc',sparks:'#e0f2fe'},ival:{crystals:55,orbs:40,sparks:30}},

  {id:'necro',name:'Некромант',emoji:'☠️',cat:'fantasy',bg:['#0a080c','#120e14','#1a141c'],part:'#a78bfa',int:8,mode:'cinema',band:20,edge:52,
    fx:{smoke:1,runes:1,ash:1,orbs:1},col:{smoke:'#4c1d95',runes:'#c4b5fd',ash:'#6b7280',orbs:'#7c3aed'},ival:{smoke:45,runes:40,ash:35,orbs:30}},
  {id:'arcane',name:'Тайная магия',emoji:'✨',cat:'fantasy',bg:['#0c0614','#140a20','#1c102c'],part:'#c084fc',int:12,mode:'pulse',band:28,edge:40,
    fx:{sparks:1,runes:1,orbs:1,stars:1},col:{sparks:'#e879f9',runes:'#c4b5fd',orbs:'#a78bfa',stars:'#f5d0fe'},ival:{sparks:50,runes:40,orbs:40,stars:30}},
  {id:'fairy',name:'Сказочный',emoji:'🧚',cat:'fantasy',bg:['#100c18','#181222','#221a30'],part:'#f0abfc',int:14,mode:'float',band:32,edge:34,
    fx:{fireflies:1,petals:1,sparks:1,butterflies:1},col:{fireflies:'#fde047',petals:'#f9a8d4',sparks:'#e879f9',butterflies:'#c4b5fd'},ival:{fireflies:50,petals:40,sparks:35,butterflies:35}},
  {id:'bloodmoon',name:'Кровавая луна',emoji:'🩸',cat:'fantasy',bg:['#120608','#1a0a0c','#241014'],part:'#f87171',int:10,mode:'cinema',band:22,edge:48,
    fx:{embers:1,ash:1,smoke:1},col:{embers:'#ef4444',ash:'#78716c',smoke:'#7f1d1d'},ival:{embers:40,ash:40,smoke:35}},
  {id:'royal',name:'Королевский',emoji:'👑',cat:'fantasy',bg:['#100818','#181022','#22162e'],part:'#fbbf24',int:10,mode:'cinema',band:24,edge:44,
    fx:{sparks:1,orbs:1,petals:1},col:{sparks:'#fbbf24',orbs:'#c084fc',petals:'#e9d5ff'},ival:{sparks:40,orbs:35,petals:30}},
  {id:'primitive',name:'Первобытность',emoji:'🦴',cat:'fantasy',bg:['#100c08','#1a140e','#241c14'],part:'#a8a29e',int:8,mode:'soft',band:30,edge:38,
    fx:{dust:1,embers:1,smoke:1},col:{dust:'#a8a29e',embers:'#ea580c',smoke:'#57534e'},ival:{dust:45,embers:30,smoke:30}},

  {id:'cyber',name:'Киберпанк',emoji:'🌃',cat:'other',bg:['#06030e','#0c0618','#140a22'],part:'#22d3ee',int:14,mode:'sharp',band:24,edge:45,
    fx:{neon:1,sparks:1,rain:1},col:{neon:'#22d3ee',sparks:'#e879f9',rain:'#67e8f9'},ival:{neon:55,sparks:40,rain:35}},
  {id:'space',name:'Космос',emoji:'🚀',cat:'other',bg:['#02040a','#060a14','#0c1220'],part:'#818cf8',int:10,mode:'wide',band:36,edge:32,
    fx:{stars:1,comets:1,orbs:1},col:{stars:'#e0e7ff',comets:'#a5b4fc',orbs:'#6366f1'},ival:{stars:60,comets:35,orbs:30}},
  {id:'void',name:'Пустота',emoji:'🌑',cat:'other',bg:['#020204','#050508','#0a0a0f'],part:'#334155',int:4,mode:'narrow',band:16,edge:60,
    fx:{stars:1,orbs:1},col:{stars:'#64748b',orbs:'#475569'},ival:{stars:40,orbs:20}},
  {id:'abyss',name:'Бездна',emoji:'👁',cat:'other',bg:['#020206','#06060c','#0c0c14'],part:'#6366f1',int:6,mode:'narrow',band:14,edge:62,
    fx:{orbs:1,smoke:1,stars:1},col:{orbs:'#4f46e5',smoke:'#1e1b4b',stars:'#818cf8'},ival:{orbs:30,smoke:40,stars:25}},
  {id:'toxic',name:'Токсичный',emoji:'☢',cat:'other',bg:['#0a1208','#0e1a0c','#142410'],part:'#a3e635',int:10,mode:'sharp',band:26,edge:40,
    fx:{fog:1,sparks:1,bubbles:1},col:{fog:'#65a30d',sparks:'#bef264',bubbles:'#84cc16'},ival:{fog:45,sparks:40,bubbles:35}},
  {id:'warm',name:'Тёплый уют',emoji:'☕',cat:'other',bg:['#140e08','#1c1410','#281c14'],part:'#fbbf24',int:10,mode:'soft',band:34,edge:32,
    fx:{embers:1,dust:1,fireflies:1},col:{embers:'#f59e0b',dust:'#d6d3d1',fireflies:'#fde68a'},ival:{embers:35,dust:25,fireflies:30}},
  {id:'moonlit',name:'Лунная ночь',emoji:'🌙',cat:'other',bg:['#060810','#0a0e1a','#101428'],part:'#e0f2fe',int:10,mode:'soft',band:30,edge:40,
    fx:{stars:1,orbs:1,fog:1},col:{stars:'#f8fafc',orbs:'#bae6fd',fog:'#64748b'},ival:{stars:50,orbs:35,fog:30}},
  {id:'ember_dusk',name:'Сумерки углей',emoji:'🌆',cat:'other',bg:['#120a08','#1c100c','#281814'],part:'#fb923c',int:12,mode:'cinema',band:26,edge:42,
    fx:{embers:1,dust:1,smoke:1},col:{embers:'#f97316',dust:'#a8a29e',smoke:'#57534e'},ival:{embers:45,dust:30,smoke:30}}
];

const CAT_LABELS = {
  nature: '🌲 Природа',
  weather: '🌤 Погода',
  elements: '🔥 Элементы',
  fantasy: '✨ Фэнтези',
  other: '🌌 Разное'
};

function clearAllEffects(){
  FX_DEFS.forEach(([id])=>{
    atm[id]=false;
    const cb=document.getElementById('atm-'+id);
    if(cb) cb.checked=false;
  });
}

function applyAtmosphere(t){
  if(!t) return;
  applyGradient(t.bg[0],t.bg[1],t.bg[2]);
  autoTheme=false;
  const at=document.getElementById('auto-theme');
  if(at) at.checked=false;
  document.querySelectorAll('.theme-btn').forEach(x=>x.classList.remove('active'));

  particlesOn=true;
  const pc=document.getElementById('particles');
  if(pc) pc.checked=true;
  intensity=t.int||12;
  const ii=document.getElementById('intensity');
  if(ii) ii.value=intensity;
  if(t.part){
    const hex=t.part;
    partColor={r:parseInt(hex.slice(1,3),16),g:parseInt(hex.slice(3,5),16),b:parseInt(hex.slice(5,7),16)};
    const pcol=document.getElementById('part-color');
    if(pcol) pcol.value=hex;
  }
  initParts();

  if(t.mode) applyMode(t.mode);
  document.querySelectorAll('.mode-btn').forEach(b=>b.classList.toggle('active',b.dataset.m===t.mode));
  if(t.band!=null){
    const bandEl=document.getElementById('band');
    if(bandEl){bandEl.value=t.band;document.documentElement.style.setProperty('--band',t.band+'%');}
  }
  if(t.edge!=null){
    const edgeEl=document.getElementById('edge');
    if(edgeEl){edgeEl.value=t.edge;document.documentElement.style.setProperty('--edge',(t.edge/100).toFixed(2));}
  }

  clearAllEffects();
  const fx=t.fx||{};
  const cols=t.col||{};
  const ivals=t.ival||{};
  Object.keys(fx).forEach(id=>{
    if(!fx[id]) return;
    atm[id]=true;
    const cb=document.getElementById('atm-'+id);
    if(cb) cb.checked=true;
    if(cols[id]){
      atmCol[id]=cols[id];
      const ci=document.getElementById('col-'+id);
      if(ci) ci.value=cols[id];
    }
    if(ivals[id]!=null){
      atmInt[id]=ivals[id];
      const el=document.getElementById('int-'+id);
      if(el) el.value=ivals[id];
    }
  });
  window.atm=atm;window.atmCol=atmCol;window.atmInt=atmInt;
  if(window.initAtm) window.initAtm();

  // Apply global atmosphere strength if present
  if(typeof window.atmStrength === 'number' && window.atmStrength !== 1){
    applyAtmStrength(window.atmStrength);
  }

  document.querySelectorAll('.atm-theme-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.tid===t.id);
  });

  try{ localStorage.setItem('efy_atm_theme', t.id); }catch(e){}
}

function absoluteRandomTheme(){
  const h=()=>Math.floor(Math.random()*40);
  const bg=['#'+h().toString(16).padStart(2,'0')+h().toString(16).padStart(2,'0')+h().toString(16).padStart(2,'0'),
            '#'+(h()+8).toString(16).padStart(2,'0')+(h()+10).toString(16).padStart(2,'0')+(h()+14).toString(16).padStart(2,'0'),
            '#'+(h()+16).toString(16).padStart(2,'0')+(h()+18).toString(16).padStart(2,'0')+(h()+22).toString(16).padStart(2,'0')];
  const modes=['still','soft','cinema','sharp','wide','narrow','float','breathe','pulse'];
  const allIds=FX_DEFS.map(x=>x[0]);
  const n=2+Math.floor(Math.random()*4);
  const shuffled=allIds.slice().sort(()=>Math.random()-0.5).slice(0,n);
  const fx={},col={},ival={};
  const randColor=()=>'#'+Math.floor(Math.random()*0xffffff).toString(16).padStart(6,'0');
  shuffled.forEach(id=>{
    fx[id]=1;
    col[id]=randColor();
    ival[id]=25+Math.floor(Math.random()*55);
  });
  applyAtmosphere({
    id:'_random',
    bg:bg,
    part:randColor(),
    int:6+Math.floor(Math.random()*16),
    mode:modes[Math.floor(Math.random()*modes.length)],
    band:14+Math.floor(Math.random()*36),
    edge:20+Math.floor(Math.random()*40),
    fx:fx,col:col,ival:ival
  });
}

function randomReadyTheme(){
  const t = ATM_THEMES[Math.floor(Math.random()*ATM_THEMES.length)];
  applyAtmosphere(t);
}

function applyAtmStrength(mult){
  window.atmStrength = mult;
  // Scale all active atm intensities
  Object.keys(atm).forEach(id=>{
    if(!atm[id]) return;
    const base = (ATM_THEMES.find(t=>t.id===localStorage.getItem('efy_atm_theme'))?.ival?.[id]) || 40;
    const scaled = Math.min(100, Math.round(base * mult));
    atmInt[id] = scaled;
    const el = document.getElementById('int-'+id);
    if(el) el.value = scaled;
  });
  window.atmInt = atmInt;
  if(window.initAtm) window.initAtm();

  // Also scale basic particles a bit
  const baseInt = 12;
  intensity = Math.round(baseInt * mult);
  const ii = document.getElementById('intensity');
  if(ii) ii.value = intensity;
  initParts();
}

function buildThemesUI(){
  const box=document.getElementById('themes-list');
  if(!box) return;
  box.innerHTML='';

  // Random buttons row
  const randRow = document.createElement('div');
  randRow.className = 'flex gap-1.5 mb-2';
  
  const randAbs = document.createElement('button');
  randAbs.className = 'flex-1 py-2 rounded-xl border border-amber-400/40 bg-amber-900/20 text-amber-200 text-[11px] font-medium';
  randAbs.textContent = '🎲 Абсолютный рандом';
  randAbs.onclick = absoluteRandomTheme;
  randRow.appendChild(randAbs);

  const randReady = document.createElement('button');
  randReady.className = 'flex-1 py-2 rounded-xl border border-sky-400/40 bg-sky-900/20 text-sky-200 text-[11px] font-medium';
  randReady.textContent = '🎲 Случайная тема';
  randReady.onclick = randomReadyTheme;
  randRow.appendChild(randReady);
  box.appendChild(randRow);

  // Categories
  const cats = ['nature','weather','elements','fantasy','other'];
  cats.forEach(cat => {
    const themes = ATM_THEMES.filter(t => t.cat === cat);
    if(!themes.length) return;

    const catHead = document.createElement('div');
    catHead.className = 'text-[10px] text-slate-500 uppercase tracking-wider mt-2.5 mb-1 px-0.5';
    catHead.textContent = CAT_LABELS[cat] || cat;
    box.appendChild(catHead);

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 gap-1.5';
    themes.forEach(t => {
      const b = document.createElement('button');
      b.className = 'atm-theme-btn text-left px-2 py-2 rounded-lg border border-white/10 hover:border-sky-400/40 hover:bg-white/5 text-[11px] leading-tight';
      b.dataset.tid = t.id;
      b.innerHTML = '<span class="mr-1">'+t.emoji+'</span>'+t.name;
      b.onclick = () => applyAtmosphere(t);
      grid.appendChild(b);
    });
    box.appendChild(grid);
  });
}

function restoreSavedTheme(){
  try{
    const id=localStorage.getItem('efy_atm_theme');
    if(!id || id === '_random') return;
    const t=ATM_THEMES.find(x=>x.id===id);
    if(t) applyAtmosphere(t);
  }catch(e){}
}
