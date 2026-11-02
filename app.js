'use strict';
const dimensions=[
['H','健康与教育','不同国家的人，获得基本教育和医疗服务的机会有多大差异？',['义务教育完成率的变异系数','婴儿死亡率的变异系数','医疗卫生资源可及性的变异系数'],'变异系数描述相对离散程度；它衡量差异，并不直接描述平均服务水平。'],
['E','环境','污染排放与环境治理投入，在空间上呈现怎样的分布？',['碳排放的莫兰指数','废水排放的莫兰指数','固体废物排放的莫兰指数','环境污染治理投资占比的莫兰指数'],'原文用空间自相关代理环境公平；回顾时应注意，空间聚集并不等同于不公平。'],
['L','生活质量','价格、贫困和城市化，在国家之间呈现怎样的空间格局？',['生产者价格指数的莫兰指数','贫困人口比例的莫兰指数','城市人口比例的莫兰指数'],'这些指标反映空间格局，不能仅凭莫兰指数的高低推断绝对差距大小。'],
['E','经济','财富与经济产出，在各国之间分布得有多不均衡？',['人均财富的基尼系数','人均 GDP 的泰尔指数'],'原文以国家间差异为研究对象；人口加权方式和统计口径会影响公平的解释。'],
['N','自然资源','资源的生产、需求、贸易和占用，是否集中在少数国家？',['生产—需求排名相关指标（PDI）','资源进出口的变异系数（IOI）','资源占有的赫芬达尔指数（HHIRO）','资源消费的赫芬达尔指数（HHIRC）'],'集中度刻画资源分布；公平解释仍需结合各国人口、需求与规模。']
];
document.querySelectorAll('[data-dimension]').forEach(button=>button.addEventListener('click',()=>{const d=dimensions[Number(button.dataset.dimension)];document.querySelectorAll('[data-dimension]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));['dimension-number','dimension-title','dimension-question','dimension-note'].forEach((id,i)=>document.getElementById(id).textContent=d[[0,1,2,4][i]]);document.getElementById('dimension-list').replaceChildren(...d[3].map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));}));
const scenarios=[['0.789','1,200','不设份额上限时，不公平峰值较高，曲线较早转向回落。'],['0.739','1,800','设置 30% 份额上限后，不公平峰值降低，但曲线转折出现在更多企业进入之后，体现模型中的政策权衡。']];
document.querySelectorAll('[data-scenario]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-scenario]').forEach(b=>{b.setAttribute('aria-pressed',String(b===button));b.classList.toggle('selected',b===button);});const s=scenarios[Number(button.dataset.scenario)];['peak','turn','scenario-text'].forEach((id,i)=>document.getElementById(id).textContent=s[i]);}));
document.getElementById('copy-speech').addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText(document.getElementById('speech-text').textContent);status.textContent='已复制';}catch{status.textContent='请选中上方文字进行复制。';}});
