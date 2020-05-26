//
class GMAPBF_TRAINING
{
	constructor()
	{
		// GUIのIDを取得
		this.GetElements_();
		//
        this.SetCategoryItems_();
        //
        this.SetQuizeIdItems_();
		//
		this.ResetOkNgButtons_();

		return;
	}

	// GUIのIDを取得
	GetElements_()
	{
		this.selector_category_ = document.getElementById('category');
		this.selector_quiz_id_ = document.getElementById('quiz_id');
		this.ary_btn_ans_ = new Array();
		this.ary_btn_okng_ = new Array();
		const ary_ans_id =
		[
			'ans0','ans1','ans2','ans3',
		];
		const ary_okng_id =
		[
			'okng_0','okng_1','okng_2','okng_3',
		];
		for (let i = 0; i < 4; i++)
		{
			this.ary_btn_ans_.push(document.getElementById(ary_ans_id[i]));
			this.ary_btn_okng_.push(document.getElementById(ary_okng_id[i]));
		}
		return;
	}
	// 科目のリストボックスにアイテムをセット
	SetCategoryItems_()
	{
		this.selector_category_.options.length = 0;
	
		const ary_category = ['経営戦略','マーケティング','アカウンティング','人・組織']
		for (let i = 0; i < ary_category.length; i++)
		{
			this.selector_category_.options[i] = new Option(ary_category[i]);
		}
		//
		this.selector_category_.options.selectedIndex = 0;
	
		return;
	}
	// 何問目
	SetQuizeIdItems_()
	{
        this.q_num_ = 10;
		this.selector_quiz_id_.options.length = 0;
	
		for (let i = 0; i < this.q_num_; i++)
		{
			this.selector_quiz_id_.options[i] = new Option(i);
		}
		//
		this.selector_quiz_id_.options.selectedIndex = 0;
	
        return;
    }

    // OK/NG ボタンの文字、背景を初期化する。
	ResetOkNgButtons_()
	{
		for (let i = 0; i < this.ary_btn_okng_.length; i++)
		{
			this.ary_btn_okng_[i].style.backgroundColor = '#e0e0e0e0';
			this.ary_btn_okng_[i].value = i;
			this.ary_btn_okng_[i].style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';
		}
		return;
    }
    //
    SetIndexes(a_category_id, a_quiz_id)
    {
        this.selector_category_.selectedIndex = a_category_id;
        this.selector_quiz_id_.selectedIndex = a_category_id;
        return;
    }
	
	//
	func_dummy()
	{
		console.log("hello world!");
	}
}
