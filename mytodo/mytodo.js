var a=document.getElementById("demo");
            var b=document.getElementById("demo1");
            function update(){
                var c=document.createElement("li");
                c.innerHTML=a.value + "<button onclick='change(this)'>edit</button>"+"<button onclick='removes(event)'>delete</button>";
                b.append(c);
            }
            
            var currentItem=null;
            function  change(event){
                currentItem=event.parentElement;
                var popup=document.getElementById("popup");
                popup.style.display="block";
            }
            function update2(event){  
                var input2=document.getElementById("input2");
                var inputvalue=input2.value;
                currentItem.innerHTML=inputvalue+"<button onclick='change(this)'>edit</button>"+"<button onclick='removes(event)'>delete</button>";
                popup.style.display="none";
                input2.value='';
            }
            function removes(event){
                event.target.parentElement.remove();
            }