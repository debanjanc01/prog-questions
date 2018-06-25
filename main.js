$(document).ready(function(){
             //read data from file
            $.getJSON("data.json",function(data){
                var questions=data.questions;
                var result='';
                questions.forEach(question => {
                result+= `<div class="container">
                <div class="desc">
                        <h2>` + question.name+`</h2>
                        <p>`+question.desc+`</p>
                </div>
                <div class="codeblock">
                    <ul>
                        <li class="li-selected">C</li>
                        <li>Java</li>
                    </ul>
                    <section class="C">
                        <pre>
                            <code>`+question.c.replace(/</g,'&lt;')+
                            `</code>
                        </pre>
                    </section>
                    <section class="Java">
                            <pre>
                                <code>`+question.java.replace(/</g,'&lt;')+`</code>
                            </pre>
                    </section>
                </div>
            </div>`             
                   
                });
                $('main').html(result);
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
                
                $('.desc').click(function(){
                    $(this).toggleClass('selected');
                    $(this).next().slideToggle();
                })
                
              
                $('div.codeblock li').click(function(){
                    $(this).addClass("li-selected");
                    $(this).next().removeClass("li-selected");
                    $(this).prev().removeClass("li-selected");
                    if($(this).text()=="C"){
                        $(this).parent().nextAll(".Java").hide();
                        $(this).parent().nextAll(".C").show();
                    }
                    else {
                        $(this).parent().nextAll(".Java").show();
                        $(this).parent().nextAll(".C").hide();
                    }
                })
            });

            
});
