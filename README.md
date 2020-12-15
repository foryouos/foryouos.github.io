# foryouos.github.io

foryouos的github主页面

Here are some ideas to get you started: 目前作者上大二，在一所无人问津的大学，学着和计算机有点相关的专业，哈哈

还可，凭着兴趣，和爱好去做这件事情。激情还算满满

个人微信公众号：foryouos

主页的网站思路：是根据抖音主页，将较少的主页内容后面加入视频画面。

整体上提高网页的呈现效果。

由于GitHub网页存储是无法存储视频的，视频存储要求要有较高的速度，才能够完整的播放。

对《你的名字》电影进行剪辑，最后剪出来7分钟左右的视频，大约980M左右。空间确实大。

以前图片都是存储在QQ空间上面，找到不变的原始链接，在网页上呈现，显然并没有成果，在本地运行确实成功啦

但是：上传到GitHub之后，失败

通过天翼云盘找到视频下载的URL，速度确实很快，也成功了，但是下载的链接是动态的，仅有几小时的使用事件，不符合。

第三套解决方案是：通过将视频上传到微博上，在设置里面取消增加水印的常规设置。

找到视频的真是播放URL，根据URL的规则找到微博视频1080p+取得视频最高画质。加入到HTML里面

微博视频增加失败：



如何将视频右键出现“控件组件”，视频另存为，视频下载等情况。即在网页取消鼠标右键的功能：

将视频放在div下，即才可以取消下面的播放操作。 


 <div>
    <video muted data-autoplay loop="loop" src="" autoplay="autoplay" class="video-bg" id="sound" controlsList="nodownload" oncontextmenu="return false;">你的浏览器不支持视频</video>
 </div>
 
 autoplay为自动播放。
 controlslist="nodownload"  取消下载播放的视频下载操作
 oncontextmenu="return false"  此操作为取消页面的右键操作
 
 
 具体的内容，在div下呈现到视频之上即可呈现
 
 具体内容：通过圆形图标呈现各个GitHub项目的名称以及logo
 
