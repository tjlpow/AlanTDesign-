var localData = `<h4>
<b>交互设计中，为什么需要这种方法？</b><br>
</h4><p><b></b></p><p>在交互设计工作中经常会遇到这样的问题，某些位置的设计牵扯到比较复杂的场景，要考虑的因素比较多，这些设计点往往是最容易引起争议的，因为团队成员不一定都能快速了解全部的场景和因素，于是只能根据自己能够想到的个别场景与因素来对设计作出判断，最终团队之间形成意见分歧，每个人都不能宏观地掌握所有的场景和因素，这时，就很可能做出错误的设计决定，同时也影响团队士气。</p><p>所以，我们需要一种共同建立文档的方式，把所有要考虑的场景和因素都一一罗列并讨论筛选，再在这基础上模拟用户可能产生的行为路径，接着沿着行为路径寻找体验好与不好的地方，好的加分，不好减分，最后得出不同设计方案的最终得分，得分高的为推荐方案。</p><h4><b>什么时候适合用？</b></h4><p><b></b></p><p>遇到某个设计点：</p><p><b>- 场景较多</b></p><p><b>- 用户状态较多</b></p><p><b><b>- </b>对这个产品影响较少，没有时间和人力进行详细的用户研究</b></p><p>团队中：</p><p><b><b>- </b>已经形成少数几个待选设计方案</b></p><p><b>- 对方案有争议</b></p><p><b>- 长时间讨论不出结果</b></p><p><b>- 团队成员为设计师，没有受过专业用户研究培训</b></p><h4><b>为什么不用A/B Test？</b></h4><p>成本问题，A/B Test为时间和人力成本较高的方法；</p><p>需要专业知识，从征集用户、过程监控到最后数据处理，都要求有较为专业的用研人员支持；</p><p>所以，A/B Test适合较为重要的设计点，有较多的时间和人力成本支撑下才能进行，本方法则适合影响较小但又较为复杂的设计点，不适合交由用研团队研究，只能由设计师团队本身去解决的问题。</p><p>所以本方法<b>并不是严谨的定量研究，而是快速敏捷的定性研究，目的是让交互设计师们理清思路，达成共识并做出最可能正确的设计决定。</b></p><hr><p><b></b></p><p><b></b></p><p><b></b></p><h1><b>如何进行？</b></h1><p>以下以我个人最近碰到的一个设计问题介绍怎么运用这种方法。</p><p>遇到问题的设计点是浏览器的账号登录的交互设计，在网络不佳的情况下，登录页的提示交互应该如何？</p><p>经过比较长时间的讨论，得出3种有争议的设计方案：</p><div class="image-package">
<img src="//upload-images.jianshu.io/upload_images/233492-49929403904cf0e0.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"><br><div class="image-caption"></div>
</div><p>禁止进入登陆页面，并toast提示网络不佳。主要考虑因素在于是：网络不好时不浪费用户时间与精力填写账户与密码。</p><p>允许进入登陆页面，不提示网络不佳，直到输入完毕点击登陆时再弹toast。主要考虑因素在于是：鼓励用户登录，即使网络不稳定也让用户尝试登录。</p><p>允许进入登陆页面，并toast提示网络不佳。主要考虑因素在于是：平衡以上两种方式，一进来就提示，让用户知道网络不佳，让用户自行选择填与不填。</p><p>另外一点值得注意的是，本浏览器登录没有记住账号密码功能，填写的账号密码在退出时会自动清空。本讨论建立在账号密码记录功能暂时缺失的情况下进行设计。</p><h3><b>场景因素分析</b></h3><p><b></b></p><p>分析用户是在什么场景下进入登陆的，影响的场景的因素主要提取了两个，网络不佳状况与急切程度。</p><p><b>网络不佳状况：长期50%、短期50%</b></p><p>长期网络不佳场景指用户长期处于没有网络信号环境，如需要长时间处于没信号的餐厅、洗手间等；</p><p>短期网络不佳场景指用户处于移动状态，如汽车、地铁、步行中，用户无法预测网络什么时候恢复；</p><p>由于没有实际数据支撑，只能根据用户群体特性猜测，两种情况出现频率都为50%</p><p><b>急切程度：急10%、不急90%</b></p><p>急切程度指用户是否很急切想要登录成功。浏览器的登录与否并不影响正常使用，不影响搜索这个可能比较急需的功能，用户群体属性也是比较休闲的人群；但也不排除用户新安装浏览器，又需要紧急同步书签浏览某个网站的这种比较特殊的情况。</p><p>由于没有实际数据支撑，只能根据用户群体特性猜测，两种情况出现频率为1:9</p><p>以上两种因素叠加起来，就会有4种<b>具体场景</b>，分别为：</p><p>1.长期、急</p><p>2.短期、急</p><p>3.长期、不急</p><p>4.短期、不急</p><p>然后根据场景因素出现的频率相乘，得出每个<b>具体场景出现的频率</b>：</p><p>1.长期50% x 急10% =<b>5%</b></p><p>2.短期50% x 急10% =<b>5%</b></p><p>3.长期50% x 不急90% =<b>45%</b></p><p>4.短期50% x 不急90% =<b>45%</b></p><h2><b>行为路径分析</b></h2><p>交互设计研究的问题本质上什么场景下产生什么行为，所以场景确定之后，就要分析场景下会产生什么行为。这时我们把三个方案逐一放到4个具体场景里面，看分别产生什么行为。</p><p>以方案2为例，在“长期、急”的具体场景中，我们认为用户的<b>行为路径</b>如下：</p><p>1.用户没发现网络不佳，输入了账号密码；</p><p>2.发现登陆不了，退出；</p><p>3.心急再进入尝试一次；</p><p>4.发现账号密码没有记录，所以重新输入</p><p>5.还是登陆失败，无可奈何放弃</p><p><br></p><p>行为路径确定后，我们开始评价行为路径中的<b>体验优缺点</b>，优点加分，缺点减分：</p><p>- 整个过程浪费用户时间 －1</p><p>- 允许用户尝试，缓解焦躁情绪 ＋1</p><p>- 第四步，发现账号密码没有记录，所以重新输入，体验不好 －1</p><p>所以方案2在“长期、急”的具体场景中的评分为（－1+1-1）乘以该具体场景的出现频率<b>5%</b>，等于－5%，即0.05。再用同样的方法得出方案2在其他具体场景中的得分，相加就可以得出方案2的总分。</p><p>以下是所有方案在4种具体场景下的行为路径分析与得分。</p><div class="image-package">
<img src="//upload-images.jianshu.io/upload_images/233492-ecfa951f18bef01c.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"><br><div class="image-caption"></div>
</div><p><br></p><p>得分乘以出现概率得到总分</p><div class="image-package">
<img src="//upload-images.jianshu.io/upload_images/233492-467edc93c3c2ecfa.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"><br><div class="image-caption"></div>
</div><p>Done！大功告成，方案一看来是比较合适的方案。但值得注意的是，方案1和3在乘场景出现几率之前是得分相同的，所以我们可以清晰地看到在场景对设计方案的影响，由于场景的出现几率只是大致猜测，所以当场景出现几率变化时你应该也能判断出各个方案的分数的变化趋势，以便于根据变化及时作出方案的变化。</p><h3>总结</h3><p>在这个例子中，用户的急切程度是影响设计决策的重要因素，乍看起来方案2是更符合用户预期的，但如果能考虑到登录对浏览器并不是急切需要的功能这点，再结合其他众多考虑因素的话，方案2反而是不太好的设计。所以单凭快速直觉思考设计问题有时候并不一定都是可靠的，因为快速直觉有时候是片面的，人会根据主观意识扭曲客观现实。在这个例子中，第一直觉通常容易高估登录对浏览器的急切程度，从而错误地选择方案2，但当你冷静分析的时候会发现，其实登录并不是那么紧急，那么应该去考虑方案1或3。</p><p>这种方法不仅仅是对比方案解决争议的工具，更重要的是有助设计师培养理性思考和逻辑思维的能力。我并不是否认直觉和感性思维在设计中的作用，在评价行为路径的体验优缺点时就用到了直觉和感性思维，这时需要设计师扮演普通用户去直觉地感性地体验设计的好与不好。但在场景分析时，设计师就不能使用直觉和感性思维，而是应该转换为数据和逻辑导向的理性思维。这就是为什么交互设计通常由工业设计专业背景的人来做，而不是其他设计类专业，因为工业设计的理科和艺术占比比较均衡，这和交互设计是相似的。工业设计在造物层面用到理性思维，用户体验层面用到感性思维；交互设计也是类似，不过造物层面不是遵循物理的逻辑，而是遵循互联网技术、感知科学、心理学、社会学和统计学等学科的原理。交互设计还是水挺深的，虽然是新生学科，未来的发展方向充满了各种可能性。</p><p><b>原创作品，转载请附件原文链接</b></p><div class="image-package">
<img src="//upload-images.jianshu.io/upload_images/233492-910a6ad9a687ee6d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/233492-910a6ad9a687ee6d.png?imageMogr2/auto-orient/strip" data-image-slug="910a6ad9a687ee6d" data-width="1018" data-height="589"><br><div class="image-caption"></div>
</div>
    `

module.exports = {
  article: localData
}