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

	//--------------------------------------------------------------
	//
	//	private methods
	//
	//--------------------------------------------------------------

	// GUIのIDを取得
	GetElements_()
	{
		this.selector_category_ = document.getElementById('category');
		this.selector_quiz_id_ = document.getElementById('quiz_id');

		//
		this.text_area_qestion_ = document.getElementById('question_id');
	
		//
		this.text_area_ref_ = document.getElementById('reference_id');
	
		//
		this.ary_btn_ans_ = new Array();
		const ary_ans_id =
		[
			'ans0','ans1','ans2','ans3',
		];
		for (let i = 0; i < ary_ans_id.length; i++)
		{
			let elm = document.getElementById(ary_ans_id[i]);
			this.ary_btn_ans_.push(elm);
		}

		//
		this.ary_btn_okng_ = new Array();
		const ary_okng_id =
		[
			'okng_0','okng_1','okng_2','okng_3',
		];
		for (let i = 0; i < ary_okng_id.length; i++)
		{
			let elm = document.getElementById(ary_okng_id[i])
			this.ary_btn_okng_.push(elm);
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
    SetIndexes_(a_category_id, a_quiz_id)
    {
        this.selector_category_.selectedIndex = a_category_id;
        this.selector_quiz_id_.selectedIndex = a_quiz_id;
        return;
	}

	//
    GetQuestion_(a_category_id, a_quiz_id)
    {
		let ret_str_q = '企業が競争優位を保てるかどうかは企業の経営資源とやケイパビリティ次第であるという考え方を何と呼ぶか？';
        return ret_str_q;
    }
	
	//
    GetAnsers_(a_category_id, a_quiz_id)
    {
		let ret_ary_str_ans =
		[
			'リソース・ベースド・ビュー',
			'アビリティ・ベースド・ビュー',
			'ポテンシャル・ベースド・ビュー',
			'コンピテンシー・ベースド・ビュー',
		];
		return ret_ary_str_ans;
    }


	////////////////////////////////////////////////////////////////
	//
	//	public methods
	//
	////////////////////////////////////////////////////////////////

	//
    ShowQuestion()
    {
		// 問題文
		this.text_area_qestion_.value = this.GetQuestion_();

		// 選択肢番号
		for (let i = 0; i < this.ary_btn_okng_.length; i++)
		{
			let item_okng = this.ary_btn_okng_[i];
			item_okng.style.backgroundColor = '#e0e0e0e0';
			item_okng.value = i;
			item_okng.style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';
		}

		// 選択肢
		const ary_str_ans = this.GetAnsers_();

		for (let i = 0; i < this.ary_btn_ans_.length; i++)
		{
			let item_a = this.ary_btn_ans_[i];
			item_a.value = ary_str_ans[i];
			item_a.style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';
		}

		//
		this.text_area_ref_.value = '';

        return;
    }
	//
	ShowAnser_and_Reference(a_ans_id)
	{
		const correct_id = 0;

		// 解答表示
		for (let i = 0; i < this.ary_btn_okng_.length; i++)
		{
			let flag_okng = (i == correct_id);
			let str_okng = '';
			let col_okng = 'linear-gradient(0deg, #d0a0d0, #f0a0f0)';
			if (flag_okng)
			{
				str_okng = '✓';
				col_okng = 'linear-gradient(0deg, #a0e0a0, #a0f0a0)';
			}
			this.ary_btn_okng_[i].value = str_okng;
			this.ary_btn_okng_[i].style.backgroundImage = col_okng;
			this.ary_btn_ans_[i].style.backgroundImage = col_okng;
		}
	
		//
		this.text_area_ref_.value = '1-17 戦略形成に関する見方」 参照';
		return;
	}

	//
	func_dummy()
	{
		console.log("hello world!");
	}
}
