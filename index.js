let accordian = document.getElementsByClassName("title_que");

for (let i = 0; i < accordian.length; i++) 
	{
		accordian[i].addEventListener("click", function () 
	    {
			if (this.childNodes[1].classList.contains("fa-plus"))
			{
				this.childNodes[1].classList.remove("fa-plus");
				this.childNodes[1].classList.add("fa-xmark");
			}
			else 
			{
				this.childNodes[1].classList.remove("fa-xmark");
				this.childNodes[1].classList.add("fa-plus");
			}

		let content = this.nextElementSibling;
		if (content.style.maxHeight)
		{
			content.style.maxHeight = null;
		}
		else
		{
			content.style.maxHeight = content.scrollHeight + "px";
		}
		});
	}