const Product = [
    "Jet Tempur",
    "Nuklir Hiroshima",
    "Infinity Stone",
    "Burj Khalifa",
    "Rudal Hipersonik",
];
const Product2 = [

];
let catalog = [
    {
        itemName: "Jet Tempur",
        amount: 10,
    },
    {
        itemName: "Nuklir Hiroshima",
        amount: 1,
    },
    {
        itemName: "Infinity Stone",
        amount: 6,
    },
    {
        itemName: "Burj Khalifa",
        amount: 5,
    },
    {
        itemName: "Rudal Hipersonik",
        amount: 3,
    },
];

let pesanan = [];

function showValues() {
    var fields = $(":input").serializeArray();
    $("#results").empty();
    jQuery.each(fields, function (i, field) {
        $("#results").append(field.value + " ");
    });
}


let n = 0;

const select = (value) => {
    Product.forEach((elem) => {
        if (value == elem) {
            Product.splice(Product.indexOf(elem), 1);
        }
    });
}

const tambah= () => {
    console.log(n);
    if (n < 4) {
        n++;
        var html = `<div class="row g-3" id="inputFormRow">
                    <div class="col">
                    <select class="form-select" id="produk" name="produk" onchange="select(value)" required>
                    <option value="">Pilih Produk</option>`;
        Product.forEach((elem) => {
            html += `<option value="${elem}">${elem}</option>`;
        });
        html += `                       </select>
        </div>
        <div class="col">
                <input type="number" name="jumlah" id="jumlah" class="form-control" aria-label="Last name" required>
                
        </div>
                        <div class="col">
                            <button id="removeRow" type="button" class="btn btn-danger">x</button>
                        </div>
                    </div>`;

        $("#newrow").append(html);
    }
};
const pesan = () => {
    let data = ``;
    $("select").map((i, item) => {
        if (item.value == catalog[i].itemName) {
            if ($(':input[type="number"]').eq(i).val() > catalog[i].amount) {
                alert("Stok tidak mencukupi");
                return false;
            }
        }
        data = `<li>
                <span id="nama_produk">${item.value}</span>
                <span id="jumlah_produk">${$(':input[type="number"]')
                .eq(i)
                .val()}</span>
        
            </li>`;
        $("#data").append(data);
    });

    let nama = $("#nama").val();
    $("h2").text(nama);
};

$(document).on("click", "#removeRow", function () {
    n--;
    Product.splice(0, 0, $("select").val());
    $(this).closest("#inputFormRow").remove();
});

function hidebutton(){
    var btn=$("#button-addon2")
    if($("#jumlah")== " "){
        btn.attr("disabled","disabled");
    }else{
        btn.removeattr("disabled");
    }
};