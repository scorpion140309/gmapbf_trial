//
function ShowQuestionSingle_(a_category_id, a_quiz_id)
{
	// 問題文
	let item_q = document.getElementById('question_id');
	item_q.value = '企業が競争優位を保てるかどうかは企業の経営資源とやケイパビリティ次第であるという考え方を何と呼ぶか？';

	// 選択肢番号
	const ary_okng_id =
	[
		'okng_0','okng_1','okng_2','okng_3',
	];
	for (let i = 0; i < ary_okng_id.length; i++)
	{
		let okng_id = ary_okng_id[i];
		let item_okng = document.getElementById(okng_id);
		item_okng.style.backgroundColor = '#e0e0e0e0';
		item_okng.value = i;
		item_okng.style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';
	}

	// 選択肢
	const ary_ans_id =
	[
		'ans0','ans1','ans2','ans3',
	];
	const ary_str_ans =
	[
		'リソース・ベースド・ビュー',
		'アビリティ・ベースド・ビュー',
		'ポテンシャル・ベースド・ビュー',
		'コンピテンシー・ベースド・ビュー',
	];

	for (let i = 0; i < ary_str_ans.length; i++)
	{
		let ans_id = ary_ans_id[i];
		let item_a = document.getElementById(ans_id);
		item_a.value = ary_str_ans[i];
		item_a.style.backgroundImage = 'linear-gradient(0deg, #d0d0d0, #f0f0f0)';
	}

	let item_r = document.getElementById('reference_id');
	item_r.value = '';

	return;
}

function ShowAnser_and_Reference_(a_ans_id)
{
	const correct_id = 0;

	// 解答表示
	const ary_ans_id =
	[
		'ans0','ans1','ans2','ans3',
	];
	const ary_okng_id =
	[
		'okng_0','okng_1','okng_2','okng_3',
	];
	for (let i = 0; i < ary_okng_id.length; i++)
	{
		let okng_id = ary_okng_id[i];
		let item_okng = document.getElementById(okng_id);
		let flag_okng = (i == correct_id);
		let str_okng = '';
		let col_okng = 'linear-gradient(0deg, #d0a0d0, #f0a0f0)';
		if (flag_okng)
		{
			str_okng = '✓';
			col_okng = 'linear-gradient(0deg, #a0e0a0, #a0f0a0)';
		}
		item_okng.value = str_okng;
		item_okng.style.backgroundImage = col_okng;
		document.getElementById(ary_ans_id[i]).style.backgroundImage = col_okng;
	}

	let item_r = document.getElementById('reference_id');
	item_r.value = '1-17 戦略形成に関する見方」 参照';
	return;
}

//
function SetCategory_()
{
	let select = document.getElementById('category')
	select.options.length = 0;

	const ary_category = ['経営戦略','マーケティング','アカウンティング','人・組織']
	for (let i = 0; i < ary_category.length; i++)
	{
		select.options[i] = new Option(ary_category[i]);
	}//
	//
	select.options.selectedIndex = 0;

	return;
}


//
function Init()
{
	SetCategory_();
	ShowQuestionSingle_(0, 0);
	return;
}

//
function ExeAll()
{
	ShowQuestionSingle_(0, 0);
	return;
}

//
function Anser(a_ans_id)
{
	ShowAnser_and_Reference_(a_ans_id);
	return;
}

