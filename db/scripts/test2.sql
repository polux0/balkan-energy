/*==============================================================*/
/* DBMS name:      Sybase SQL Anywhere 12                       */
/* Created on:     6/23/2019 5:41:01 PM                         */
/*==============================================================*/


/*==============================================================*/
/* Table: AUCTIONDAILY                                          */
/*==============================================================*/
create table AUCTIONDAILY 
(
   AUCTIONYEARLYID3     integer                        not null,
   AUCTIONDAILYCODE     varchar(32)                    null,
   AUCTIONDAILYDISPLAY  varchar(32)                    null,
   AUCTIONDAILYTIME     timestamp                      null,
   AUCTIONDAILYVALUE    decimal(10,3)                  null,
   AUCTIONDAILYCAPACITY decimal(10,3)                  null,
   AUCTIONDAILYMEASURE1 varchar(32)                    null,
   AUCTIONDAILYMEASURE2 varchar(32)                    null,
   AUCTIONAUTOMACLYUPDATED integer                        null,
   constraint PK_AUCTIONDAILY primary key (AUCTIONYEARLYID3)
);

/*==============================================================*/
/* Index: AUCTIONDAILY_PK                                       */
/*==============================================================*/
create unique index AUCTIONDAILY_PK on AUCTIONDAILY (
AUCTIONYEARLYID3 ASC
);

/*==============================================================*/
/* Table: AUCTIONMONTHLY                                        */
/*==============================================================*/
create table AUCTIONMONTHLY 
(
   AUCTIONYEARLYID2     integer                        not null,
   AUCTIONDAILYCODE     varchar(32)                    null,
   AUCTIONDAILYDISPLAY  varchar(32)                    null,
   AUCTIONDAILYTIME     timestamp                      null,
   AUCTIONDAILYVALUE    decimal(10,3)                  null,
   AUCTIONDAILYCAPACITY decimal(10,3)                  null,
   AUCTIONDAILYMEASURE1 varchar(32)                    null,
   AUCTIONDAILYMEASURE2 varchar(32)                    null,
   AUTOMATICALYUPDATED  integer                        null,
   constraint PK_AUCTIONMONTHLY primary key (AUCTIONYEARLYID2)
);

/*==============================================================*/
/* Index: AUCTIONMONTHLY_PK                                     */
/*==============================================================*/
create unique index AUCTIONMONTHLY_PK on AUCTIONMONTHLY (
AUCTIONYEARLYID2 ASC
);

/*==============================================================*/
/* Table: AUCTIONYEARLY                                         */
/*==============================================================*/
create table AUCTIONYEARLY 
(
   AUCTIONYEARLYID      integer                        not null,
   AUCTIONDAILYCODE     varchar(32)                    null,
   AUCTIONDAILYDISPLAY  varchar(32)                    null,
   AUCTIONDAILYTIME     timestamp                      null,
   AUCTIONDAILYVALUE    decimal(10,3)                  null,
   AUCTIONDAILYCAPACITY decimal(10,3)                  null,
   AUCTIONDAILYMEASURE1 varchar(32)                    null,
   AUCTIONDAILYMEASURE2 varchar(32)                    null,
   AUCTIONYEARLYAUTOMACLYUPDATED integer                        null,
   constraint PK_AUCTIONYEARLY primary key (AUCTIONYEARLYID)
);

/*==============================================================*/
/* Index: AUCTIONYEARLY_PK                                      */
/*==============================================================*/
create unique index AUCTIONYEARLY_PK on AUCTIONYEARLY (
AUCTIONYEARLYID ASC
);

/*==============================================================*/
/* Table: COMMERCIALFLOWS                                       */
/*==============================================================*/
create table COMMERCIALFLOWS 
(
   COMMERCIALFLOWID     integer                        not null,
   PHYSICALFLOWCODE     varchar(32)                    null,
   PHYSICALFLOWDISPLAY  varchar(32)                    null,
   PHYSICALFLOWMEASURE  varchar(32)                    null,
   PHYSICALFLOWTIME     timestamp                      null,
   PHYSICALFLOWVALUE    decimal(10,3)                  null,
   PHYSICALAUTOMACLYUPDATED integer                        null,
   constraint PK_COMMERCIALFLOWS primary key (COMMERCIALFLOWID)
);

/*==============================================================*/
/* Index: COMMERCIALFLOWS_PK                                    */
/*==============================================================*/
create unique index COMMERCIALFLOWS_PK on COMMERCIALFLOWS (
COMMERCIALFLOWID ASC
);

/*==============================================================*/
/* Table: CONSUMPTION                                           */
/*==============================================================*/
create table CONSUMPTION 
(
   CONSUMPTIONID        integer                        not null,
   COUNTRYID            integer                        null,
   CONSUMPTIONCODE      varchar(32)                    null,
   CONSUMPTIONDISPLAY   varchar(32)                    null,
   CONSUMPTIONMEASURE   varchar(32)                    null,
   CONSUMPTIONTIME      timestamp                      null,
   CONSUMPTIONPOTENCIAL decimal(10,3)                  null,
   CONSUMPTIONREALISED  decimal(10,3)                  null,
   CONSUMPTIONAUTOMACLYUPDATED integer                        null,
   constraint PK_CONSUMPTION primary key (CONSUMPTIONID)
);

/*==============================================================*/
/* Index: CONSUMPTION_PK                                        */
/*==============================================================*/
create unique index CONSUMPTION_PK on CONSUMPTION (
CONSUMPTIONID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_2_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_2_FK on CONSUMPTION (
COUNTRYID ASC
);

/*==============================================================*/
/* Table: COUNTRY                                               */
/*==============================================================*/
create table COUNTRY 
(
   COUNTRYID            integer                        not null,
   COUNTRYCODE          varchar(32)                    null,
   COUNTRYDISPLAY       varchar(32)                    null,
   COUNTRYMEASURE       varchar(32)                    null,
   COUNTRYAUTOMACLYUPDATED integer                        null,
   constraint PK_COUNTRY primary key (COUNTRYID)
);

/*==============================================================*/
/* Index: COUNTRY_PK                                            */
/*==============================================================*/
create unique index COUNTRY_PK on COUNTRY (
COUNTRYID ASC
);

/*==============================================================*/
/* Table: PHYSICALFLOW                                          */
/*==============================================================*/
create table PHYSICALFLOW 
(
   COMMERCIALFLOWID2    integer                        not null,
   PHYSICALFLOWCODE     varchar(32)                    null,
   PHYSICALFLOWDISPLAY  varchar(32)                    null,
   PHYSICALFLOWMEASURE  varchar(32)                    null,
   PHYSICALFLOWTIME     timestamp                      null,
   PHYSICALFLOWVALUE    decimal(10,3)                  null,
   PHYSICALFLOWAUTOMACLYUPDATED integer                        null,
   constraint PK_PHYSICALFLOW primary key (COMMERCIALFLOWID2)
);

/*==============================================================*/
/* Index: PHYSICALFLOW_PK                                       */
/*==============================================================*/
create unique index PHYSICALFLOW_PK on PHYSICALFLOW (
COMMERCIALFLOWID2 ASC
);

/*==============================================================*/
/* Table: PRODUCTION                                            */
/*==============================================================*/
create table PRODUCTION 
(
   PRODUCTIONID         integer                        not null,
   COUNTRYID            integer                        null,
   PRODUCTIONCODE       varchar(32)                    null,
   PRODUCTIONMEASURE    varchar(32)                    null,
   PRODUCTIONTIME       timestamp                      null,
   PRODUCTIONVALUE      decimal(10,3)                  null,
   PRODUCTIONTYPE       varchar(32)                    null,
   PRODUCTIONSUBTYPE    varchar(32)                    null,
   PRODUCTIONDISPLAY    varchar(32)                    null,
   PRODUCTIONAUTOMACLYUPDATED integer                        null,
   constraint PK_PRODUCTION primary key (PRODUCTIONID)
);

/*==============================================================*/
/* Index: PRODUCTION_PK                                         */
/*==============================================================*/
create unique index PRODUCTION_PK on PRODUCTION (
PRODUCTIONID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_3_FK on PRODUCTION (
COUNTRYID ASC
);

/*==============================================================*/
/* Table: RELATIONSHIP_4                                        */
/*==============================================================*/
create table RELATIONSHIP_4 
(
   COUNTRYID            integer                        not null,
   COMMERCIALFLOWID     integer                        not null,
   constraint PK_RELATIONSHIP_4 primary key clustered (COUNTRYID, COMMERCIALFLOWID)
);

/*==============================================================*/
/* Index: RELATIONSHIP_4_PK                                     */
/*==============================================================*/
create unique clustered index RELATIONSHIP_4_PK on RELATIONSHIP_4 (
COUNTRYID ASC,
COMMERCIALFLOWID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_4_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_4_FK on RELATIONSHIP_4 (
COUNTRYID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_5_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_5_FK on RELATIONSHIP_4 (
COMMERCIALFLOWID ASC
);

/*==============================================================*/
/* Table: RELATIONSHIP_5                                        */
/*==============================================================*/
create table RELATIONSHIP_5 
(
   COUNTRYID            integer                        not null,
   COMMERCIALFLOWID2    integer                        not null,
   constraint PK_RELATIONSHIP_5 primary key clustered (COUNTRYID, COMMERCIALFLOWID2)
);

/*==============================================================*/
/* Index: RELATIONSHIP_5_PK                                     */
/*==============================================================*/
create unique clustered index RELATIONSHIP_5_PK on RELATIONSHIP_5 (
COUNTRYID ASC,
COMMERCIALFLOWID2 ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_6_FK on RELATIONSHIP_5 (
COUNTRYID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_7_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_7_FK on RELATIONSHIP_5 (
COMMERCIALFLOWID2 ASC
);

/*==============================================================*/
/* Table: RELATIONSHIP_6                                        */
/*==============================================================*/
create table RELATIONSHIP_6 
(
   COUNTRYID            integer                        not null,
   AUCTIONYEARLYID2     integer                        not null,
   constraint PK_RELATIONSHIP_6 primary key clustered (COUNTRYID, AUCTIONYEARLYID2)
);

/*==============================================================*/
/* Index: RELATIONSHIP_6_PK                                     */
/*==============================================================*/
create unique clustered index RELATIONSHIP_6_PK on RELATIONSHIP_6 (
COUNTRYID ASC,
AUCTIONYEARLYID2 ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_8_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_8_FK on RELATIONSHIP_6 (
COUNTRYID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_9_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_9_FK on RELATIONSHIP_6 (
AUCTIONYEARLYID2 ASC
);

/*==============================================================*/
/* Table: RELATIONSHIP_7                                        */
/*==============================================================*/
create table RELATIONSHIP_7 
(
   COUNTRYID            integer                        not null,
   AUCTIONYEARLYID3     integer                        not null,
   constraint PK_RELATIONSHIP_7 primary key clustered (COUNTRYID, AUCTIONYEARLYID3)
);

/*==============================================================*/
/* Index: RELATIONSHIP_7_PK                                     */
/*==============================================================*/
create unique clustered index RELATIONSHIP_7_PK on RELATIONSHIP_7 (
COUNTRYID ASC,
AUCTIONYEARLYID3 ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_10_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_10_FK on RELATIONSHIP_7 (
COUNTRYID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_11_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_11_FK on RELATIONSHIP_7 (
AUCTIONYEARLYID3 ASC
);

/*==============================================================*/
/* Table: RELATIONSHIP_8                                        */
/*==============================================================*/
create table RELATIONSHIP_8 
(
   COUNTRYID            integer                        not null,
   AUCTIONYEARLYID      integer                        not null,
   constraint PK_RELATIONSHIP_8 primary key clustered (COUNTRYID, AUCTIONYEARLYID)
);

/*==============================================================*/
/* Index: RELATIONSHIP_8_PK                                     */
/*==============================================================*/
create unique clustered index RELATIONSHIP_8_PK on RELATIONSHIP_8 (
COUNTRYID ASC,
AUCTIONYEARLYID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_12_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_12_FK on RELATIONSHIP_8 (
COUNTRYID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_13_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_13_FK on RELATIONSHIP_8 (
AUCTIONYEARLYID ASC
);

/*==============================================================*/
/* Table: SPOT                                                  */
/*==============================================================*/
create table SPOT 
(
   SPOTID               integer                        not null,
   COUNTRYID            integer                        null,
   SPOTCODE             varchar(32)                    null,
   SPOTDISPLAY          varchar(32)                    null,
   SPOTMEASURE          varchar(32)                    null,
   SPOTTIME             timestamp                      null,
   SPOTVALUE            decimal(10,3)                  null,
   SPOTAUTOMACLYUPDATED integer                        null,
   constraint PK_SPOT primary key (SPOTID)
);

/*==============================================================*/
/* Index: SPOT_PK                                               */
/*==============================================================*/
create unique index SPOT_PK on SPOT (
SPOTID ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_1_FK on SPOT (
COUNTRYID ASC
);

alter table CONSUMPTION
   add constraint FK_CONSUMPT_RELATIONS_COUNTRY foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID)
      on update restrict
      on delete restrict;

alter table PRODUCTION
   add constraint FK_PRODUCTI_RELATIONS_COUNTRY foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_4
   add constraint FK_RELATION_RELATIONS_COUNTRY foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_4
   add constraint FK_RELATION_RELATIONS_COMMERCI foreign key (COMMERCIALFLOWID)
      references COMMERCIALFLOWS (COMMERCIALFLOWID)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_5
   add constraint FK_RELATION_RELATIONS_COUNTRY foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_5
   add constraint FK_RELATION_RELATIONS_PHYSICAL foreign key (COMMERCIALFLOWID2)
      references PHYSICALFLOW (COMMERCIALFLOWID2)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_6
   add constraint FK_RELATION_RELATIONS_COUNTRY foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_6
   add constraint FK_RELATION_RELATIONS_AUCTIONM foreign key (AUCTIONYEARLYID2)
      references AUCTIONMONTHLY (AUCTIONYEARLYID2)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_7
   add constraint FK_RELATION_RELATIONS_COUNTRY foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_7
   add constraint FK_RELATION_RELATIONS_AUCTIOND foreign key (AUCTIONYEARLYID3)
      references AUCTIONDAILY (AUCTIONYEARLYID3)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_8
   add constraint FK_RELATION_RELATIONS_COUNTRY foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID)
      on update restrict
      on delete restrict;

alter table RELATIONSHIP_8
   add constraint FK_RELATION_RELATIONS_AUCTIONY foreign key (AUCTIONYEARLYID)
      references AUCTIONYEARLY (AUCTIONYEARLYID)
      on update restrict
      on delete restrict;

alter table SPOT
   add constraint FK_SPOT_RELATIONS_COUNTRY foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID)
      on update restrict
      on delete restrict;

