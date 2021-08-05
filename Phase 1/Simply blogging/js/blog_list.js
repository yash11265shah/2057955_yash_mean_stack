          var blogs=JSON.parse(localStorage.getItem("blogs"));
          var blogbody=document.getElementById("blogbody");

          for(var i=0;i<blogs.length;i++)
          {
               blogbody.innerHTML += ` <div class="post-preview">
                        <a href="add_blog.html">
                            <h2 class="post-title"> ${blogs[i].title}</h2>
                            <h3 class="post-subtitle">${blogs[i].articles}</h3>
                        </a>

                    </div>
                    <!-- Divider-->
                    <hr class="my-4" />`
          }
