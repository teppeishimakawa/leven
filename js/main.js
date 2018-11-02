


document.getElementById("btn").addEventListener('click',function()
{
var a=document.getElementById("txt1").value;
var b=document.getElementById("txt2").value;
document.getElementById("txt3").value=levenshteinDistance(a,b);
});


function levenshteinDistance( str1, str2 )
{
var x = str1.length;
var y = str2.length;
var d = [];  //距離コスト値

//縦横の１列目は空文字との比較なのでコストは文字数と同じ
for(var i=0; i<=x; i++)
　{
  d[i] = [];
  d[i][0] = i;
  }

for(var i=0; i<=y; i++)
　{
  d[0][i] = i;
  }

//以下はd[1][1]より大きいマスを埋めるための記述
var cost = 0;
for(var i=1; i<=x; i++)
　{
  for(var j=1; j<=y; j++)
  　{
  	//斜めの文字が同一だったらコスト+0
    cost = str1[i-1] == str2[j-1] ? 0 : 1;
    //costは上+1、左+1、左上+costの一番小さいものになる。
　　d[i][j] = Math.min(d[i - 1][j] +1, d[i][j - 1] +1, d[i - 1][j - 1] + cost);
    }
  }


    // 表の作成開始
    var rows=[];
    var table = document.createElement("table");
    table.border="1"
    // 表に2次元配列の要素を格納
    for(i = 0; i <= x; i++)
    {
     rows.push(table.insertRow(-1));  // 行の追加
     for(j = 0; j <= y; j++)
     {
     cell=rows[i].insertCell(-1);
     cell.appendChild(document.createTextNode(d[i][j]));
     }
    }
    // 指定したdiv要素に表を加える
    document.getElementById("tbl").appendChild(table);


      return d[x][y];
}


　







