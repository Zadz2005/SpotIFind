package com.SpotifyArtists.Spot_I_Find.artist;

import com.fasterxml.jackson.annotation.JsonUnwrapped;
import jakarta.persistence.*;

@Entity
@Table(name = "artist_detail")
public class ArtistDetail {

    @EmbeddedId
@JsonUnwrapped
    private ArtistDetailId id;
    public String getTitle() {
        return id.getTitle();
    }

    public void setTitle(String title) {
        id.setTitle(title);
    }



    private Long streams;

    // Rank columns
    private Integer global;
    private Integer us;
    private Integer gb;
    private Integer ca;
    private Integer mx;
    private Integer au;
    private Integer de;
    private Integer ph;

    @Column(name = "in_rank")
    private Integer IN;


    private Integer br;

    @Column(name = "id")   // reserved word in Java
    private Integer ID;

    private Integer fr;
    private Integer nl;
    private Integer se;
    private Integer it;
    private Integer my;
    private Integer no;
    private Integer es;
    private Integer pl;
    private Integer dk;
    private Integer tr;
    private Integer cl;
    private Integer sg;
    private Integer pt;
    private Integer be;
    private Integer th;
    private Integer nz;
    private Integer ar;
    private Integer ch;
    private Integer fi;
    private Integer pe;
    private Integer ie;
    private Integer gr;
    private Integer co;
    private Integer ro;
    private Integer za;
    private Integer ae;
    private Integer cz;
    private Integer vn;
    private Integer hu;

    @Column(name = "at")
    private Integer at;


    private Integer sa;

    @Column(name = "tw")
    private Integer tw;

    private Integer il;
    private Integer bg;
    private Integer sk;
    private Integer cr;
    private Integer ec;
    private Integer lt;

    @Column(name = "hk")
    private Integer hk;

    private Integer kz;
    private Integer ua;
    private Integer pk;
    private Integer ru;
    private Integer eg;
    private Integer lv;
    private Integer jp;
    private Integer gt;
    private Integer ma;

    @Column(name = "kr")
    private Integer kr;

    private Integer ee;
    private Integer pa;
    private Integer hn;
    private Integer bo;
    private Integer sv;

    @Column(name = "is_rank")
    private Integer is;

    @Column(name = "do_rank")   // reserved word in Java
    private Integer DO;

    private Integer ni;
    private Integer py;
    private Integer uy;
    private Integer cy;
    private Integer lu;
    private Integer ve;
    private Integer ng;
    private Integer mt;

    @Column(name = "by")
    private Integer by;

    @Column(name = "ad")
    private Integer ad;

    public ArtistDetailId getId() {
        return id;
    }

    public void setId(ArtistDetailId id) {
        this.id = id;
    }

    public Long getStreams() {
        return streams;
    }

    public void setStreams(Long streams) {
        this.streams = streams;
    }

    public Integer getGlobal() {
        return global;
    }

    public void setGlobal(Integer global) {
        this.global = global;
    }

    public Integer getUs() {
        return us;
    }

    public void setUs(Integer us) {
        this.us = us;
    }

    public Integer getGb() {
        return gb;
    }

    public void setGb(Integer gb) {
        this.gb = gb;
    }

    public Integer getCa() {
        return ca;
    }

    public void setCa(Integer ca) {
        this.ca = ca;
    }

    public Integer getMx() {
        return mx;
    }

    public void setMx(Integer mx) {
        this.mx = mx;
    }

    public Integer getAu() {
        return au;
    }

    public void setAu(Integer au) {
        this.au = au;
    }

    public Integer getDe() {
        return de;
    }

    public void setDe(Integer de) {
        this.de = de;
    }

    public Integer getPh() {
        return ph;
    }

    public void setPh(Integer ph) {
        this.ph = ph;
    }




    public Integer getBr() {
        return br;
    }

    public void setBr(Integer br) {
        this.br = br;
    }



    public Integer getFr() {
        return fr;
    }

    public void setFr(Integer fr) {
        this.fr = fr;
    }

    public Integer getNl() {
        return nl;
    }

    public void setNl(Integer nl) {
        this.nl = nl;
    }

    public Integer getSe() {
        return se;
    }

    public void setSe(Integer se) {
        this.se = se;
    }

    public Integer getIt() {
        return it;
    }

    public void setIt(Integer it) {
        this.it = it;
    }

    public Integer getMy() {
        return my;
    }

    public void setMy(Integer my) {
        this.my = my;
    }

    public Integer getNo() {
        return no;
    }

    public void setNo(Integer no) {
        this.no = no;
    }

    public Integer getEs() {
        return es;
    }

    public void setEs(Integer es) {
        this.es = es;
    }

    public Integer getPl() {
        return pl;
    }

    public void setPl(Integer pl) {
        this.pl = pl;
    }

    public Integer getDk() {
        return dk;
    }

    public void setDk(Integer dk) {
        this.dk = dk;
    }

    public Integer getTr() {
        return tr;
    }

    public void setTr(Integer tr) {
        this.tr = tr;
    }

    public Integer getCl() {
        return cl;
    }

    public void setCl(Integer cl) {
        this.cl = cl;
    }

    public Integer getSg() {
        return sg;
    }

    public void setSg(Integer sg) {
        this.sg = sg;
    }

    public Integer getPt() {
        return pt;
    }

    public void setPt(Integer pt) {
        this.pt = pt;
    }

    public Integer getBe() {
        return be;
    }

    public void setBe(Integer be) {
        this.be = be;
    }

    public Integer getTh() {
        return th;
    }

    public void setTh(Integer th) {
        this.th = th;
    }

    public Integer getNz() {
        return nz;
    }

    public void setNz(Integer nz) {
        this.nz = nz;
    }

    public Integer getAr() {
        return ar;
    }

    public void setAr(Integer ar) {
        this.ar = ar;
    }

    public Integer getCh() {
        return ch;
    }

    public void setCh(Integer ch) {
        this.ch = ch;
    }

    public Integer getFi() {
        return fi;
    }

    public void setFi(Integer fi) {
        this.fi = fi;
    }

    public Integer getPe() {
        return pe;
    }

    public void setPe(Integer pe) {
        this.pe = pe;
    }

    public Integer getIe() {
        return ie;
    }

    public void setIe(Integer ie) {
        this.ie = ie;
    }

    public Integer getGr() {
        return gr;
    }

    public void setGr(Integer gr) {
        this.gr = gr;
    }

    public Integer getCo() {
        return co;
    }

    public void setCo(Integer co) {
        this.co = co;
    }

    public Integer getRo() {
        return ro;
    }

    public void setRo(Integer ro) {
        this.ro = ro;
    }

    public Integer getZa() {
        return za;
    }

    public void setZa(Integer za) {
        this.za = za;
    }

    public Integer getAe() {
        return ae;
    }

    public void setAe(Integer ae) {
        this.ae = ae;
    }

    public Integer getCz() {
        return cz;
    }

    public void setCz(Integer cz) {
        this.cz = cz;
    }

    public Integer getVn() {
        return vn;
    }

    public void setVn(Integer vn) {
        this.vn = vn;
    }

    public Integer getHu() {
        return hu;
    }

    public void setHu(Integer hu) {
        this.hu = hu;
    }

    public Integer getAt() {
        return at;
    }

    public void setAt(Integer at) {
        this.at = at;
    }

    public Integer getSa() {
        return sa;
    }

    public void setSa(Integer sa) {
        this.sa = sa;
    }

    public Integer getTw() {
        return tw;
    }

    public void setTw(Integer tw) {
        this.tw = tw;
    }

    public Integer getIl() {
        return il;
    }

    public void setIl(Integer il) {
        this.il = il;
    }

    public Integer getBg() {
        return bg;
    }

    public void setBg(Integer bg) {
        this.bg = bg;
    }

    public Integer getSk() {
        return sk;
    }

    public void setSk(Integer sk) {
        this.sk = sk;
    }

    public Integer getCr() {
        return cr;
    }

    public void setCr(Integer cr) {
        this.cr = cr;
    }

    public Integer getEc() {
        return ec;
    }

    public void setEc(Integer ec) {
        this.ec = ec;
    }

    public Integer getLt() {
        return lt;
    }

    public void setLt(Integer lt) {
        this.lt = lt;
    }

    public Integer getHk() {
        return hk;
    }

    public void setHk(Integer hk) {
        this.hk = hk;
    }

    public Integer getKz() {
        return kz;
    }

    public void setKz(Integer kz) {
        this.kz = kz;
    }

    public Integer getUa() {
        return ua;
    }

    public void setUa(Integer ua) {
        this.ua = ua;
    }

    public Integer getPk() {
        return pk;
    }

    public void setPk(Integer pk) {
        this.pk = pk;
    }

    public Integer getRu() {
        return ru;
    }

    public void setRu(Integer ru) {
        this.ru = ru;
    }

    public Integer getEg() {
        return eg;
    }

    public void setEg(Integer eg) {
        this.eg = eg;
    }

    public Integer getLv() {
        return lv;
    }

    public void setLv(Integer lv) {
        this.lv = lv;
    }

    public Integer getJp() {
        return jp;
    }

    public void setJp(Integer jp) {
        this.jp = jp;
    }

    public Integer getGt() {
        return gt;
    }

    public void setGt(Integer gt) {
        this.gt = gt;
    }

    public Integer getMa() {
        return ma;
    }

    public void setMa(Integer ma) {
        this.ma = ma;
    }

    public Integer getKr() {
        return kr;
    }

    public void setKr(Integer kr) {
        this.kr = kr;
    }

    public Integer getEe() {
        return ee;
    }

    public void setEe(Integer ee) {
        this.ee = ee;
    }

    public Integer getPa() {
        return pa;
    }

    public void setPa(Integer pa) {
        this.pa = pa;
    }

    public Integer getHn() {
        return hn;
    }

    public void setHn(Integer hn) {
        this.hn = hn;
    }

    public Integer getBo() {
        return bo;
    }

    public void setBo(Integer bo) {
        this.bo = bo;
    }

    public Integer getSv() {
        return sv;
    }

    public void setSv(Integer sv) {
        this.sv = sv;
    }

    public Integer getIs() {
        return is;
    }

    public void setIs(Integer is) {
        this.is = is;
    }

    public Integer getDoRank() {
        return DO;
    }

    public void setDoRank(Integer doRank) {
        this.DO = doRank;
    }

    public Integer getNi() {
        return ni;
    }

    public void setNi(Integer ni) {
        this.ni = ni;
    }

    public Integer getPy() {
        return py;
    }

    public void setPy(Integer py) {
        this.py = py;
    }

    public Integer getUy() {
        return uy;
    }

    public void setUy(Integer uy) {
        this.uy = uy;
    }

    public Integer getCy() {
        return cy;
    }

    public void setCy(Integer cy) {
        this.cy = cy;
    }

    public Integer getLu() {
        return lu;
    }

    public void setLu(Integer lu) {
        this.lu = lu;
    }

    public Integer getVe() {
        return ve;
    }

    public void setVe(Integer ve) {
        this.ve = ve;
    }

    public Integer getNg() {
        return ng;
    }

    public void setNg(Integer ng) {
        this.ng = ng;
    }

    public Integer getMt() {
        return mt;
    }

    public void setMt(Integer mt) {
        this.mt = mt;
    }

    public Integer getBy() {
        return by;
    }

    public void setBy(Integer by) {
        this.by = by;
    }

    public Integer getAd() {
        return ad;
    }

    public void setAd(Integer ad) {
        this.ad = ad;
    }

}
