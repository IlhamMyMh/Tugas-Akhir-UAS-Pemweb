function validasi(){
    var nama_lengkap = document.getElementById("nama_lengkap").value;
    var email = document.getElementById("email").value;
    var no_tlp = document.getElementById("no_tlp").value;
    var negara = document.getElementById("negara").value;
    var check_in = document.getElementById("check_in").value;
    var check_out = document.getElementById("check_out").value;
    var jumlah_orang = document.getElementById("jumlah_orang").value;
    var tipe_kamar = document.getElementById("tipe_kamar").value;
    var a1 = "Anda harus mengisi data ";

    if(nama_lengkap == ""){
        a1 = a1 + "nama lengkap, ";
        console.log("belum input nama lengkap");
    }
    if(email == ""){
        a1 = a1 + "email, "
        console.log("belum input email");
    }
    if(no_tlp == ""){
        a1 = a1 + "no_tlp, ";
        console.log("belum input no telepon");
    }
    if(negara == ""){
        a1 = a1 + "negara, ";
        console.log("belum input negara");
    }
    if(check_in == ""){
        a1 = a1 + "tanggal check in, ";
        console.log("belum input tanggal check in");
    }
    if(check_out == ""){
        a1 = a1 + "tanggal check out, ";
        console.log("belum input tanggal check out");
    }
    if(jumlah_orang == ""){
        a1 = a1 + "jumlah orang, ";
        console.log("belum input jumlah orang");
    }
    if(tipe_kamar == ""){
        a1 = a1 + "tipekamar. ";
        console.log("belum input tipe kamar");
    }
    if(a1 == "Anda harus mengisi data "){
        console.log("Data Anda Lengkap");
        alert("Data Anda Lengkap");
    }else{
        alert(a1);
    }
}