function fillOwners(db) {
    let sql
    sql = "INSERT INTO Softeng2021.owners(user_type, first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('admin','Ann','Hollander','polyni','123','1982-10-08',2305,'Greece','Athens','Agatharchou Street 3',10554)";
    db.query(sql, (err, results) => {
        if (err) throw err;
    });
    sql = "INSERT INTO Softeng2021.owners(user_type, first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('provider','Jimmy','Colletti','whatever','123','1998-05-23',1974,'Greece','Athens','Agias Filotheis Street 15',10556)";
    db.query(sql, (err, results) => {
        if (err) throw err;
    });
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Valeria','Shannon','aboardCoconut7','CX[FQA_aarAJ(Nu^}(D4oBanZM_[EqDgUb$D)|lk%`XL+n(&w,U}>^G%Fgs.Oba}HOH|;,I)b?','1996-03-23',1896,'Greece','Athens','Damassippou Street 42',15771)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Angelia','Gomez','pacifiedCurlew3',';(tNvQb-g]&UYPpus,ZRH]I[2*58Kd','1986-06-04',1559,'Greece','Athens','Akadimias Street 37',10671)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Jackie','Day','annoyedLlama4','(c##&[ &01bvLU9|=I`->S%4&h3v.8A{%9]vY{Y#eU}>yF@>CuU}6JS>*UHe}=X^[r;O.?FMj&$^7jO}S}+Ga;X','1993-01-18',4434,'Greece','Athens','Chionidou Street 17',11632)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Larry','Ellefson','jealousTomatoe0','hW-IY%~fG2izkA^NX<`=H@ASe[M0wR4*0:isbD7gL&6(%k4Zom#9Y0jn-T<3xuI8sGT;.xrcGmy;CZ3C:+70=','1951-11-19',4059,'Greece','Athens','Damareos Street 53',11633)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Vicki','Smith','kindDunbird5','6cCy&JgJ6D#Xfe8V:}X*?(tRWUT|uIF}deFLdD*zFAAE>P#zQ2~*cTE{T]t6.f:#7i5;LHu f{8GbJNPFJ,','1971-06-10',232,'Greece','Athens','Efthymenous Street 31',10444)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Florence','Nagata','betrayedThrush5',',d<1n>n>iRg','1973-01-17',2554,'Greece','Athens','Foivou Street 29',11743)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Maria','Alexander','dejectedSardines7','v8!2F(rH6zp98xq:T%x','1971-12-15',4525,'Greece','Athens','Katerinis Street 25',	11855)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Karan','Carson','boredSmelt9','YzbVBw+y]:aQX$iM7prUQ$O9x67%LqFTfkb? q=zz; m{+~Tians~_ Sp`K^s|yVz;cS]O#~D,#79]EfeAK9k:sPDS','1970-04-27',327,'Greece','Athens','Katechaki Georgiou Street 39',11525)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Deena','Harwood','pluckyMandrill8','5Z05VVDs;))n#6:2qo9%','1975-02-21',4683,'Greece','Athens','Kypselis Street 36',11362)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Christopher','Gumbs','amazedSalami0','in2,w$n#}Tmh7_$>9yn~0*o5u#`Gs}>7cxZV|W+OX=M D{HHL?','2001-12-02',3638,'Greece','Athens','Afroditis Street 27',10558)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Wilbur','Ashcraft','excitedCardinal4','$lDwxY&C*]>v~I!OK4`ZI`}!5)gP[rk&2Fdviwi7j-OPo<2)Me1`<S12S=<dRp8~#F2rb(~%{PY0eG)6!hXzqlEZ','1960-08-09',3737,'Greece','Thessaloniki','25 Martiou Street 14',54645)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Austin','Mcdevitt','pacifiedShads2','re~@gUyVZ<l`Q@H1!xBoQ_#^vsL4tAc:= T9Ilv:?lRq6kDkTucBlyc<xp1%},','1998-08-20',3132,'Greece','Thessaloniki','28 Oktovriou Street 27',54642)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Laura','Kuzma','obsessedMagpie8','yt#Ko6K3`pjj*.*[Iv6*Zd2mwl37X<lsnisunR,XYk3-z^X#OqU9&3oB Yz_=4bLl4vT>0fo]AY M}2','1999-09-21',3955,'Greece','Thessaloniki','Agias Triados Street 3',54640)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Elton','Williams','aloofOtter0','p^&.RP.g(BRPZ0@)J:Zr.T+p1>2CON9.w,N;qo7gn1wqPzF@g9bj1g{p<Pz*>ZE4oSQHf&]ZiBA)eD4Ey,)!Um2[0P4','2001-04-05',4832,'Greece','Thessaloniki','Aristotelous Street 39',54631)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Manuel','Gill','lovesickCheese9','WFA=MYQAm{Mv$s[~Vl2O>Df32LEV8ERMbui_7 xruJB5','1989-12-01',3551,'Greece','Thessaloniki','Eptapyrgiou Street 6',54633)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Carlton','Gentile','wrathfulWhiting4','h6uL<>d]aq7750`+obNh9E]?{N;d)<T`+&h:{JW O $gb1b:_>F','1975-02-28',4590,'Greece','Thessaloniki','Evvoias Street 27',54638)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Joseph','Garcia','debonairOatmeal3','1cthzDk,_Tv^G~U}{PG<*2#[678lN&l~V@_YSsu%:-dKVwMDmD#bhl:4c0k(Kf $Vv^WbbFH?{9Sl`y.8GJ(','1976-10-22',1859,'Greece','Thessaloniki','Kallinikou Street 7',54630)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Rhonda','Walker','adoringBasmati1','L:kZwJk .Oi0PaGvuHQB**TgOby&;zb+bkshK0(t{~f[^J[,va9JpjAmdSr~R%hTj#G7;8P<C,C|EQe5','1987-05-15',4821,'Greece','Thessaloniki','Kappadokias Street 18',54453)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Maurice','Thigpen','pleasedBittern6',' $=[+oopk8qBB','1965-10-27',30,'Greece','Thessaloniki','Krispou Street 9',54634)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Alfred','Raebel','peacefulTermite9','elz(Jt+($r)1s+b4tGD%-`t*^Y0wa8l9h%AVO,0M`','2001-09-27',670,'Greece','Thessaloniki','Mystis Street 18',54453)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Mia','Donovan','wearyDoughnut3','oUzi6^hqTP0-n|<[:V~`pBdIdk$&WZu#G%_!G{^gLc!kdL,L<KS9s&)z,:xmW:(?]Hp%p%}S|u| MZnZ=ocXXVh','1950-08-20',3972,'Greece','Thessaloniki','Polykleitou Street	35',54351)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Duane','Misnick','holisticChough6',')de>L=E4+!4,hX<hf6:nuCv0z:kM%5pt0yV.MB&T7kOmC#nXv%2e*9P!R5vCr~WREPXU?x{[t,V4$','1987-08-14',731,'France','Paris','Denoyez Street 27',75001)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Ruben','Trabert','innocentBustard8','})_L7V%liCCd9pI62k)B&U;z+~!Y`KZ,Xvd?#]-EVWhI]SyvG','1974-09-18',13,'France','Paris','Oberkampf Street 19',75061 )";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Lynn','Huggins','peacefulLard5','(HN[p `6r5xtw1<>&[yaK][*wj&<j7<D$','1991-03-17',935,'France','Paris','Marseille Street 38',75026 )";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Thomas','Patel','sadShads9','awbJgrw)bo:&9h>v>g','1961-10-12',3886,'France','Paris','Vieille du Temple Street 25',75054 )";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Carly','Huey','worriedJerky8','`3;jw#PV^]k>.bO)O@(0$&cN-6{cQ0^j=N^=Jbm#a7T!fg:mfD9]Ca)`yxz=8wHe+.7(Vd+GR*qVJDjFRSs=@oCdyKWr}--Z','1974-03-25',3554,'France','Paris','Montorgueil Street 46',75078)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Yolanda','Schreiber','spiritedCod3','oRPWz9H1ax$_m1q@0ZL_RE}','1999-10-16',2209,'France','Paris','Martyrs Street 32',75090 )";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Erin','Torres','joyfulChough9','4mXDR<LZ9txt*xFnm6>)D#j<4_c[6qMEs`LOB7*A-aDegL]v#@ZXY{3~GLTqEg$DD|)3o&L7MBf','1991-11-11',1863,'France','Paris','Lepic Street 54',75041 )";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('John','Martinez','pacifiedGranola1','tC=rr0(e`T&cEf[kU.$gxC','2001-09-10',408,'France','Paris','Mouffetard Street 29',75010)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Daniel','Prindle','grizzledShads6','^!kfS^?jf<j4[7iYlNBLyy=EdRanW46G=p: :<eG3yO,6<-AWx^?c','1957-05-27',4978,'France','Marseille','Senac Street 25',13001)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Genevieve','Hester','fondMallard7','Q9n_;u<_$*@)NUe]J_,tb?U0ME]gP]#','1978-08-22',3013,'France','Marseille','La Grande Armee Street 17',13001)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Mark','Roy','contentPudding4','wz@@,>0Nq1 ]jt*cQuHFM-hM^civz<V4+i>y7!9.EA&ThQv87(w7Vy0_a.`TQbg(}a^ TRS5MPan<uW','1989-11-07',4256,'France','Marseille','La Loubiere Street 49',13006)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Margaret','Jones','trustingSmelt7','f:R v(TMODyUu{:$* ;-9(s^a0wSg%_X%r>J%X BmFxuYI]i`3Iz','1953-08-14',2342,'France','Marseille','Berlioz Street 56',13006)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Jason','Sandage','abjectWidgeon3','%p@)2qcH2q{~BM7 >xOPsk*)zbyDFKmz_ZzL(IZe#dmFvMH.Al~?b','1979-11-19',1200,'France','Marseille','Bergers Street 5',13006)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Deborah','Morrow','gutturalPorpoise4','Au68lEARUmT#-!-b>*E<k?|Wbd8v[3EMpYO','1969-12-10',4998,'France','Marseille','Emile Duclayx 5',13004)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Annette','Franco','aboardPlover0','DaH M$.10dS}H9J<TgJkO5UHjKdt2iVDA2:`+k]=hr>J@;CDux=Tov;T lMi^_%m(#s~N}w^8d`^l !i`Q','1974-06-10',2154,'France','Marseille','Sainte Cecile Street 17',13005)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Frances','Ioele','wrathfulApricots3','7tE4UrJ549)_CL5qni2Yc=U^e8|JwQa2hC)c5yP]]Pl','1968-11-26',410,'France','Marseille','Breteuil Street 23',13006)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Vonda','Ohearn','somberLlama4','K1J86XtQ.|CGG%v]2Aj9759%8sd,on;+*w`FO)x)Tzo[J}w W9N17V93N','1959-01-27',1218,'Germany','Berlin','	Ansgar Street 4',49134)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Eugene','Thomas','goofyMeerkat5','wG.ZG_z(q?p5Ngl?f!k#uwJB#+S~{G&@i|FnBr|I7|mjBwM`:T!l=ltRM~jE3M|H<UyMe','1998-11-27',3370,'Germany','Berlin','Leimkugel Street 13',38170)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Stephen','Morrical','pridefulTortoise0','H1C8z @,-cL&PeA$llC]6N]wDj,]SGe|1wlChYc$#k>^D<z>vOtvxhrc5q&=&z%SmBU.SMj,~`:~_0a,?Vve@<Yt5FwbeM:dI','1998-08-04',3323,'Germany','Berlin','S�dring Street 25',48282)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Roberto','Rider','mildGarlic2','Su3oz1d0]4*ke{(:','1980-06-13',4283,'Germany','Berlin','West Street 62',48282)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Ronald','Kawai','needyIcecream3','_FECZ&CC=ig4|4mnpEp#:K5-0UA','1961-07-22',1547,'Germany','Berlin','Forsthaus Street 14',61169)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Jessie','Breeding','tautSnail5',')kxd Ldx-L,+&c%#%KWCR&b1mjr2cnnqbIUX^eFC9K04 JE*.)d^Wv;g;CGJ!ldC)[','1986-05-02',2215,'Germany','Berlin','	Iburger Street 4',49196)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Elaine','Carter','offendedWigeon8','Uk%tn3NiDa?K2N9~YpH[-18Rt','1987-02-05',3188,'Germany','Berlin','Sch�tzen Street 8',49219)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Rita','Durden','lyingMagpie4','p2QwD4ESH.%`f)=vJ)','2001-08-06',518,'Germany','Berlin','Berliner Street 26',49124)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Julia','Gurganus','thrilledCurlew6','b!@8dDl.<Zz?b4*Fq;K*)>4{.`e13dXF?xJ#2|<Kx-,$VH5f@sgI:vb','1960-07-23',2629,'Germany','Munich','Zweibr�ckenstra�e Street 12',80331)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Pearl','Love','curiousCod8','[48zD9hAVOs)tWnAG0O1pO}Ht:+ga2NJl3wxh?ZB&BnQxY4Y!Iqc7F&|','1952-04-08',1259,'Germany','Munich','Barer Street 34',80799)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Lila','Lesperance','yearningOtter9','#M]9+@`FVZhTwzTr#)#OG_U','2002-03-22',939,'Germany','Munich','Bahnhofplatz Street 1',80335)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Edwin','Harris','tautKitten7','X4Y|$u!8((*-y3tR*SbFLOU4pJ(%P:SHMkfkHn1;*@%CdN%m(;ZrsGxLtI)u#{.s@>zI(d`0BwJSQtpU-mHPGqq%','1998-09-25',581,'Germany','Munich','Terminalstrasse Mitte Street 20',85356)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Alice','Rustin','abjectStork1','6i$f%{SB:ejhj<pH[zv','1969-08-06',4736,'Germany','Munich','Paul-Heyse Street 10',80336)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Junior','Edwards','worriedChowder3','m.`2L<D~[H]a2|j9wVF&!1yLt0_{qImL?g&w[Eub|lB?RHh-j}rmXJZK','1995-12-14',1196,'Germany','Munich','Sparkassenstrasse Street 10',80331)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Patricia','Spaid','chicPear8',']L|+*c-A:A)LE297T+:7t8EVPl:7-nMu6d]*$rK_LO@Sd-_Xm)t k-xCxV!~|852X3|?tdqLu*,Pq f*H*','1978-10-11',27,'Germany','Munich','Tal Street 41',80331)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Jordan','Gadsen','ferventToucan3','w+DT<W_8a^lJUBB,6wvg]yw)|7BYO]','1955-07-04',3089,'Germany','Munich','Hohenzollern Street 5',80801)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Timothy','Grossen','alertPoultry9','@`{a5XtqMjTAxxp#b&WYeRdA@UVK>Ls=<.4sF-yVU(<k!+LVo[#c_BU eqG3grF','1993-09-25',1744,'Italy','Rome','Sediari Street 8',00186)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Logan','Moore','importedCur2','ofE[f%Kx|vlBJ6# P|yD0ck','1987-12-12',2825,'Italy','Rome','Nazionale Street 22',00184)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Marilyn','Branham','morbidSheep0','UI93MX&l_L>)G-)<{CGg;}}ee.@2?y^~^)[rvJg7Cr9GfGV*jjdR,]QEP& $f^3nu.rj6[7*W( G:k','1998-05-04',2801,'Italy','Rome','Torre Argentina Street 47',00186)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Tamatha','Monteleone','shyCur3','n^WA1af9sE%1%lNp9o P^3m0_8|2+BTR?Q8783>3iqzy|RQln:K7WUsUrhF0Xmg=J33h<aoz9G;Z_%!|C6{b6_qE(ls#.','1977-05-12',4261,'Italy','Rome','Tor De Conti Street 17',00184)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Howard','Brooks','relievedThrushe1','7t#sdjRx+g`Ln','1964-11-08',2456,'Italy','Rome','G. Gutenberg Street 29',00143)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Jerry','Rubert','shyCaribou0','9;5$&u[8c<','1964-12-07',3715,'Italy','Rome','Alessandro Specchi Street 10',00186)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Michael','Troutman','morbidRat0','OD&IbTh?,1>G`+~*n-*+)|qfWR!Gm{$r_ v] )lb^(qr*J:tCXH^*9','1998-01-08',1113,'Italy','Rome','Vicolo del Piede Street 2',00153)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Opal','Warren','peacefulWhiting3','+-Q#K#!*%~Up`u @_M9x]w:!)<[V`>S5x1#nMSAaa$|D-La7tFjJ6=r>tgP(zGW>OLwo7[.CpZSH5Qr$','1952-10-14',4490,'Italy','Rome','Sistina Street 53',00187)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Stephanie','Armstrong','worldlyIcecream4','> %xnzwO]_8eW>VL<ddd)c?.H2^$*l|49]KprG<','1981-04-13',3924,'Italy','Milan','Caldera Street 3',20153)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Kenneth','Holcomb','curiousShads7','Q#]Rd(a(n( 1M:AtaX5$u1W P28Cei[Mz-MS9VlF<<uV}cIz|dkYC=[0(S3{g(u1I!>P<UwY 2blk','1993-07-16',415,'Italy','Milan','Privata Venezia Giulia Street 8',20157)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Steve','Steverson','grumpyCockatoo3','%{6QwAmP>W)o+P(A|M%K1y$X:uc}p7v;|A','1984-01-28',3685,'Italy','Milan','Alberico Albricci Street 2',20122)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Sherry','Rodriguez','murkyRelish5','2|F!A0K)}e&Deh-a8kjqw3>c:.m(:ijse,qSr,7','1976-07-11',2210,'Italy','Milan','Degli Olivetani Street 4',20123)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Sadie','House','jubilantGranola2','MW$W*R+4y=L','1974-01-12',320,'Italy','Milan','San Tomaso Street 2',20121)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Barbara','Honore','vengefulGnu5','>U[AG=#f4-4=yb.)xT~RVcPpg[,','1959-12-24',4710,'Italy','Milan','Vincenzo Forcella Street 6',20144)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Georgia','Hooper','amusedSnipe3','<m6[!,$An)bPu6?]>F[WB','1972-11-07',4785,'Italy','Milan','Santa Radegonda Street 14',20121)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Imogene','Anderson','pridefulChile4','A;{:siX<NX','1992-12-14',905,'Italy','Milan','Aristotele Fioravanti Street 6',20156)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Debra','Luce','dreadfulMacaw9','C=$2VfzM4c}.06>&(<X71r*Khx ZhrL4?.r&|C?Lh.$-y:)n9D6fLt;&xGVRwZfigb}rv7T<{G{dz+qZnt','1994-05-06',4565,'Sweden','Stockholm','Arsenalsgatan Street 6',11147)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Caroline','Walquist','emptyToucan6','[u[J]Go}`)&-4kzKtzi+luk{A4Z73uz5F9C2Z9IebO8g2zNF;2gjE<}(){J09qG*]<y_,(jD&','1997-07-14',4679,'Sweden','Stockholm','Peter Myndes Backe Street 5',11646)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Billy','Limones','pacifiedWidgeon8','uppz4}|z;1hg,:E`u-M40gHunOot6;2Vq|-geTF8[vlp3J%6P_K.EvVD*Xpx@y]-m)q$!^ZSP&HvR5 9yydlEW','1960-05-02',4587,'Sweden','Stockholm','Brunkebergstorg Street 9',10327)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('David','Patino','tautBoa7','je J+ DI62!HA6X_!.Hi8*|JG*wf1Q<Be &rY,#l','1998-09-11',4013,'Sweden','Stockholm','Brunkebergstorg Street 6',11151)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Gerald','Robinson','sincereLion3',']wxy;=Tp+lBjH5`PQLVt;7:8VicNq[k|4n*g9hZq(e_UG.4F,O7:o@?|a34zv+NZp^SuGlFVm[Su2v[}{i_pXL^','1986-01-08',2001,'Sweden','Stockholm','Nils Ericssons Plan Street 4',11164)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Edgar','Salazar','hushedDoves9','4n<X8Y,=6WvG4AV2#]^zp+8b.9_Gl[89<lXUfq~;,bkr&Z[~y%i,Ut9sSN|F:VS5.Q7$35zrow$9<vuSK3L0qP{lB=?N!Zf','1985-12-26',1918,'Sweden','Stockholm','Birger Jarlsgatan Street 24',11434)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Vickie','King','needfulBass7','<ATn3(7 _lC|nZ&F:bO2E*(rWo?hq8SQ^1Po0~Gdjk, -.S380Bqw10,9{?m4Jm7bO$D:','1984-10-14',3522,'Sweden','Stockholm','Vasagatan Street 22',11121)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Jonathan','Rogers','worriedWildfowl2','YB0FHF%*IIv[g@+!K%VUTYi[y)!ixf(hcX7i%b3.JB7@!gY6nUeZP=cmA[J','1998-01-04',1894,'Sweden','Stockholm','Tjaerhovsgatan S�dermalm Street 11',11621)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('James','Towry','brainyCardinal2','TG%n$nEdLx-CG5xN0%IkhkRa-dpIOdS3B)G ugzZf+KFqCfd.J.ays&);<CfeD-bpWVpG:C 4s!TWa','1950-11-09',4010,'Sweden','Gothenburg','Sodra Hamngatan Street 59',40124)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Hank','Bello','worldlyGelding7','eDT7z,jg>^& ZQE','1979-10-03',3478,'Sweden','Gothenburg','Kungstorget Street 9',41117)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Yesenia','Martinson','needfulCordial2','2|xpg4_[l0D<_K.D7z-*6.}80P:yg}[cXbP1l[|Ly d,z','1957-01-23',3257,'Sweden','Gothenburg','Lindholmspiren Street 4',41756)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Lesley','Gutierrez','cheerfulSmelt7','!B536w:5,7DO%lo2K]%7cHl:Fy{|uil+-ei.VQbezuE(3%%!}0OUs*!A Fh*y3Krx.?i*Zz^<9i&D=','2001-04-04',3236,'Sweden','Gothenburg','Drottninggatan Street 67',41107)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Steven','Wilson','debonairSeafowl1','X3b~[@|{T][UxpEc8rqzdp?sb3.Ta+I_ eLpx&R83chHW6qf68R%kY)bh;`8]1F-5ymYo?LbMb&[B ^6R2QA!N)!Y','2000-06-26',3641,'Sweden','Gothenburg','Sodra Hamngatan Street 2',41106)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Rodger','Payne','boredRelish3','QL-ao*ZynI$|z1Irjn*ZvCAG$Kp9^V389~iCk-|gpe85r2X4!2~]bQ_d gUGvrv','1985-05-15',1861,'Sweden','Gothenburg','Massans gata Street 24',40226)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Lucinda','Riddle','pacifiedEggs5','G+BPN&?T<MgxW^~(Oa& wFilG?Kq ngdvGS$A&6aM{>o_b[?LM[jMw]wT^WmU{v0C@?','2000-09-13',2249,'Sweden','Gothenburg','Vaestra Hamngatan Street 3',41117)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Sam','Hernandez','mercifulWildfowl9','SF^2NSI=({<9TyhuY$%1[:E(|)9<xfaEi?u5+<jp^u>nddkt-UHggK)6JK0hcayPeu%h]KB+q','1991-01-27',440,'Sweden','Gothenburg','Drottningtorget Street 10',41103)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Charles','Butler','zestyApricots3','yKx%2&tld= c#K&>3C84CiI>o;oEz$$D6faC2;!L.^sH,+F:~|.1VF=~','1961-12-11',530,'Spain','Madrid','Fuentes Street 10',28013)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Ana','Monigold','peacefulBass9','q}1;NZ,KjYW`Ndq[G2]G[k0|FG,[=!c8b@5y=4Ii^{Z3N.qsJ3t$F><;G32O2`~_;WgC,btb-(*}s-)05h|','1963-03-12',2257,'Spain','Madrid','Barquillo Street 21',28004)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Robert','Walters','hushedEagle4','oCcaTj2u,%j)O','1950-02-02',1877,'Spain','Madrid','Infanta Isabel Street 13',28014)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Miguel','Carlson','wearyLard9','uSao[95S%~0bO$tcI]+,{77D:bqfIzfaZt<q','1994-11-24',1369,'Spain','Madrid','Imperial Street 8',28012)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('George','Flores','soreMacaw2','Zv37^eTHrS^Bo|Djr*F&Q`;(C;vd=KTNMYbfPo|@==#m~3tox%J<?[~z(E5gW|Mz$4-_tK)_','1974-09-25',115,'Spain','Madrid','Atocha Street 81',28012)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Albert','Conner','crummyFish6','y,x*lG1b+)0EQhHP^<V`B6N.}xyJ?N)#','1980-08-12',462,'Spain','Madrid','Gran Via Street 84',28013)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Kimberly','Andrews','anxiousMussel8','KCUF.%C>fzZDoA1YSHdLNDQ1VfLw36w+7 gc>>Sd[[1Q3Y.]u]%#8u!z@.~nV?bC:78vQ;P]xEr+LGHGm[H0f?S1VYz6F_AgM','1956-03-15',4159,'Spain','Madrid','Amador de los Rios Street 3',28010)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Joel','Mclean','gleefulOatmeal9',',D2Hh#&WUdkrOo<fvkQItIrEj]|9Ug%7xkKBd=0@~+[~o;r&6','1992-10-13',3627,'Spain','Madrid','Atocha Street 49',28012)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Scott','Mckinney','hushedCordial5','$];bsBziCd^y`89^Ro0^h>!3Gr','1969-02-26',2831,'Spain','Barcelona','Pintor Fortuny Street 4',08001)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Marcella','Baldwin','trustingOtter9','1g`EQa8>d%J&SoZN1obn*.KJ&j-X4@`PB=JFswJ','1966-01-04',2024,'Spain','Barcelona','Passeig Colom Street 12',08002)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Elizabeth','Lewis','awedSheep8','g#eIt4x6=`2Lr )]V.k_[}dpl4X[XBRjJ1m|h_}%A@an@sCH(Ov<0Dfr:;AYK,$dK[B^luaC1f8[>ud]T','1956-09-07',4389,'Spain','Barcelona','Pelai Street 3',08001)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Brandon','Kern','goofyCamel5','pk&k~NsYf7|B%c*7SSCz804t]mV0S:#&LIv`+<})F}Ro`C+e nU#vG1NMp,{&<fSJlR`Hla{bM=jYY,Mb:!l24h','2002-01-19',804,'Spain','Barcelona','Diagonal Street 568',08021)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Whitney','Munoz','solemnToucan8','#>Qr=s*&7u2kYnI#pVJ6.^n^:|wZ>j5^2XDT?v^dtM^HgEf}s%VP1}.-IY,N>eZz^RN}%3mfB=Pgx','1961-10-06',3461,'Spain','Barcelona','Gracia Street 64',08007)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Rose','Leyva','yearningTacos5','o~VCQf) W%9B+->{!BYHn:F#-^','1951-01-17',1741,'Spain','Barcelona','Avda Paral Street 80',08001)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Hubert','Laskowski','stressedKitten0','C;1n.Vg(sd.v_','1959-06-01',634,'Spain','Barcelona','La Rambla Street 109',08001)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Ricky','Lunsford','lovesickPolenta3',':)(6sm1tp93RzgsM]IA2U>2!RM1i2x[Dy','1978-10-27',3417,'Spain','Barcelona',' Llull Street 170',08005)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Gloria','Lobue','bubblyCow5','C@B&Fh=JBsj 7XwAl*=Wjkt?o{HBe=SWvnozKmlSB^)N_,g23qkjQJS|#?&:','1988-12-19',3769,'Austria','Vienna','Frankenberggasse Street 10',1040)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Ralph','Laskey','wrathfulDunbird5','8pv~+J0%TD}KlvzBJ(_^(3[3;wu5-q5)Lo{v)gJE3DJ=6C-pj>K`U (8C<NJV[eYlJi[U3!NwkkFl1;2.Djird$>@WQoH','1998-07-03',4233,'Austria','Vienna','Praterstrasse Street 72',1020)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Kyle','Romero','insecureSalt3',' ^ZX41qOdw|C=!#MQB?X]Qg3W}!Tug','1957-11-07',298,'Austria','Vienna','Burggasse Street 2',1070)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Margie','Myers','crushedRhino5','5H1[+?Ca@g[]ib<#!G8`w#UAadSg)$T0! a) Z]EdV{93-r69FD!z@n+O;DXBADRP;=iv7HMwgo;vmQ<Q(orl).6:wK6~q5OHW6q','1998-01-21',1681,'Austria','Vienna','Stephansplatz Street 9',1010)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Samuel','Sherrill','sadViper0','*W<t+UAXBZ0_x|*u7YhudeLDlw+{D%](#}ekfAZ :}Nf>Gr+pxYpBKh#0HQC{SLX8R|56vH<!QfdLGC|{{Uy([$$FfE','1967-05-15',797,'Austria','Vienna','Kaerntner Ring Street 16',1010)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Luis','Hodge','soreBittern0','D;mylua|!k$=RqeKE@-2gJkEaETYL; VnQAkMgL-u%av@s$M!juD@:q','1980-10-16',859,'Austria','Vienna','Papagenogasse Street 6',1060)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Shirley','Tinsley','shyToucan0','Xps;Ln=qL<{%@zs])@SFv?J-=CP{;zH4sUXLUKw#?Nu@7l.Ld8-ZC0|S1yp7CzXh$G)10X{UR N$}l#{Nxmk+6!DZFCH4]%h )','1985-10-15',2048,'Austria','Vienna','Einfahrtsstrasse Street 3',1300)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Darlene','Given','crummySardines7','TtzE-3U=Sdq?=HlG0Lw!9Kh7dZLtkwJeSuQB@$D8h}P$jQ[Q3cQ3I~^YLW_@0{w]86`CmT=~8-~+dZ6HusP84u','1971-05-01',2826,'Austria','Vienna','Hainburger Street 19',1030)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Mary','Storm','bubblyHoopoe9','kPW!q$C^Lu53NIxhMk1sC@BLsNhMQ=@>_)`~;L<MV?{~XH0kXWxukT~1%!|; !ffSJ+LT6]fW:}8e4:1]ouNgP-t','1953-09-15',3285,'Austria','Salzburg','Auerspergstrasse Street 61',5020)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Anna','Lester','worldlyCaribou5','H}mA@6iCa,{[JEb&$r0?DpS*YHi!iZb`Xps-kq`%1_LUDa}&ngz~bu^o^cU|%C75b3CSj,asKl ESPi[Z2~LFXA,b>Z~)20fqc|','1989-02-02',1127,'Austria','Salzburg','Rainerstrasse Street 6',5020)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Glenn','Corney','thrilledCordial0','s:U[=U<OsnY;eOYgkdfd_]#','1973-12-24',877,'Austria','Salzburg','Judengasse Street 15',5020)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    sql = "INSERT INTO Softeng2021.owners(first_name, last_name, user_name, password, date_of_birth, Bonus_points, country, city, address, postal_code) VALUES('Diane','Meadows','stressedCamel3','26D=uwal1V,W~ C2','1987-02-07',495,'Austria','Salzburg','Elisabethkai Street 58',5020)";
    db.query(sql,(err,results)=>{
        if (err) throw err;});
    console.log('Owners inserted in db')
}
module.exports.fillOwners = fillOwners;
