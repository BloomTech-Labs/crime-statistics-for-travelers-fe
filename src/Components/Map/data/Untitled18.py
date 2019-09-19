#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd


# In[3]:


Alabama = pd.read_csv('alabama-violent-crime.csv')


# In[4]:


Alaska= pd.read_csv('alaska-violent-crime.csv')


# In[5]:


Arizona = pd.read_csv('arizona-violent-crime.csv')


# In[ ]:


Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District_of_Columbia,Florida,Georgia


# In[6]:


Arkansas = pd.read_csv('arkansas-violent-crime.csv')


# In[7]:


California = pd.read_csv('california-violent-crime.csv')


# In[8]:


Colorado = pd.read_csv('colorado-violent-crime.csv')


# In[9]:


Connecticut = pd.read_csv('connecticut-violent-crime.csv')


# In[10]:


Delaware = pd.read_csv('delaware-violent-crime.csv')


# In[11]:


District_of_Columbia = pd.read_csv('district-of-columbia-violent-crime.csv')


# In[12]:


Florida = pd.read_csv('florida-violent-crime.csv')


# In[13]:


Georgia = pd.read_csv('georgia-violent-crime.csv') 


# In[ ]:


Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District_of_Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine


# In[15]:


Hawaii = pd.read_csv('hawaii-violent-crime.csv')


# In[16]:


Idaho = pd.read_csv('idaho-violent-crime.csv')


# In[17]:


Illinois = pd.read_csv('illinois-violent-crime.csv')


# In[19]:


Indiana = pd.read_csv('indiana-violent-crime.csv')


# In[20]:


Iowa = pd.read_csv('iowa-violent-crime.csv')


# In[23]:


Kansas = pd.read_csv('kansas-violent-crime.csv')


# In[22]:


Kentucky = pd.read_csv('kentucky-violent-crime.csv')


# In[24]:


Louisiana = pd.read_csv('louisiana-violent-crime (1).csv')


# In[25]:


Maine = pd.read_csv('maine-violent-crime.csv')


# In[ ]:


Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District_of_Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Missouri,Mississippi,Montana,Nebraska,Nevada,New_Hampshire


# In[26]:


Maryland = pd.read_csv('maryland-violent-crime.csv')


# In[27]:


Massachusetts = pd.read_csv('massachusetts-violent-crime.csv')


# In[28]:


Michigan = pd.read_csv('michigan-violent-crime.csv')


# In[29]:


Missouri = pd.read_csv('missouri-violent-crime.csv')


# In[30]:


Mississippi = pd.read_csv('mississippi-violent-crime.csv')


# In[31]:


Montana = pd.read_csv('montana-violent-crime.csv')


# In[32]:


Nebraska = pd.read_csv('nebraska-violent-crime.csv')


# In[33]:


Nevada = pd.read_csv('nevada-violent-crime.csv')


# In[34]:


New_Hampshire = pd.read_csv('new-hampshire-violent-crime.csv')


# In[35]:


New_Mexico = pd.read_csv('new-mexico-violent-crime.csv')


# In[ ]:


Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District_of_Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Missouri,Mississippi,Montana,Nebraska,Nevada,New_Hampshire,New_Mexico,New_York,North_Carolina,New_Jersey,North_Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,South_Carolina,South_Dakota


# In[36]:


New_York = pd.read_csv('new-york-violent-crime.csv')


# In[37]:


North_Carolina = pd.read_csv('north-carolina-violent-crime.csv')


# In[38]:


New_Jersey = pd.read_csv('new-jersey-violent-crime.csv')


# In[39]:


North_Dakota = pd.read_csv('north-dakota-violent-crime.csv')


# In[41]:


Ohio = pd.read_csv('ohio-violent-crime.csv')


# In[42]:


Oklahoma = pd.read_csv('oklahoma-violent-crime.csv')


# In[43]:


Oregon = pd.read_csv('oregon-violent-crime.csv')


# In[44]:


Pennsylvania = pd.read_csv('pennsylvania-violent-crime.csv')


# In[45]:


South_Carolina = pd.read_csv('south-carolina-violent-crime.csv')


# In[46]:


South_Dakota = pd.read_csv('south-dakota-violent-crime.csv')


# In[ ]:


Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District_of_Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Missouri,Mississippi,Montana,Nebraska,Nevada,New_Hampshire,New_Mexico,New_York,North_Carolina,New_Jersey,North_Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,South_Carolina,South_Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West_Virginia,Winconsin,Wyoming


# In[47]:


Tennessee = pd.read_csv('tennessee-violent-crime.csv')


# In[49]:


Texas = pd.read_csv('texas-violent-crime.csv')


# In[50]:


Utah = pd.read_csv('utah-violent-crime.csv')


# In[51]:


Vermont = pd.read_csv('vermont-violent-crime.csv')


# In[52]:


Virginia = pd.read_csv('virginia-violent-crime.csv')


# In[53]:


Washington = pd.read_csv('washington-violent-crime.csv')


# In[60]:


West_Virginia = pd.read_csv('west-virginia-violent-crime.csv')


# In[54]:


Winconsin = pd.read_csv('wisconsin-violent-crime.csv')


# In[56]:


Wyoming = pd.read_csv('wyoming-violent-crime.csv')


# In[57]:


Rhode_Island = pd.read_csv('rhode-island-violent-crime.csv')


# In[58]:


df = pd.merge(Wyoming, Winconsin, on='Year', how='right')


# In[61]:


df = pd.merge(df, West_Virginia, on='Year', how='right')


# In[62]:


df = pd.merge(df, Winconsin, on='Year', how='right')


# In[63]:


df = pd.merge(df, West_Virginia, on='Year', how='right')


# In[64]:


df = pd.merge(df, Washington, on='Year', how='right')


# In[65]:


df = pd.merge(df, Virginia, on='Year', how='right')


# In[66]:


df = pd.merge(df, Vermont, on='Year', how='right')


# In[67]:


df = pd.merge(df, Texas, on='Year', how='right')


# In[68]:


df = pd.merge(df, Tennessee, on='Year', how='right')


# In[69]:


df = pd.merge(df, South_Dakota, on='Year', how='right')


# In[70]:


df = pd.merge(df, South_Carolina, on='Year', how='right')


# In[71]:


df = pd.merge(df, Rhode_Island, on='Year', how='right')


# In[72]:


df = pd.merge(df, Pennsylvania, on='Year', how='right')


# In[73]:


df = pd.merge(df, Oregon, on='Year', how='right')


# In[74]:


df = pd.merge(df, Oklahoma, on='Year', how='right')


# In[75]:


df = pd.merge(df, Ohio, on='Year', how='right')


# In[76]:


df = pd.merge(df, North_Dakota, on='Year', how='right')


# In[77]:


df = pd.merge(df, North_Carolina, on='Year', how='right')


# In[78]:


df = pd.merge(df, New_York, on='Year', how='right')


# In[81]:


df = pd.merge(df, New_Mexico, on='Year', how='right')


# In[ ]:


df = pd.merge(df, New_Hampshire, on='Year', how='right')


# In[ ]:


df = pd.merge(df, New_Jersey, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Nevada, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Nebraska, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Montana, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Missouri, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Mississippi, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Minnesota, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Michigan, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Massachusetts, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Maine, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Louisiana, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Kentucky, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Kansas, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Iowa, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Indiana, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Illinois, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Idaho, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Hawaii, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Georgia, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Florida, on='Year', how='right')


# In[ ]:


df = pd.merge(df, District_Of_Columbia, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Connecticut, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Colorado, on='Year', how='right')


# In[ ]:


df = pd.merge(df, California, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Arkansas, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Arizona, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Alaska, on='Year', how='right')


# In[ ]:


df = pd.merge(df, Alabama, on='Year', how='right')


# In[83]:


df


# In[109]:


df_new = pd.concat([Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District_of_Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Missouri,Mississippi,Montana,Nebraska,Nevada,New_Hampshire,New_Mexico,New_York,North_Carolina,New_Jersey,North_Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,South_Carolina,South_Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West_Virginia,Winconsin,Wyoming ])


# In[110]:


df_new = df_new.drop_duplicates()


# In[112]:


df_new.index.names = ['Index']


# In[113]:


df_new


# In[135]:


df_new.reset_index(drop=True, inplace=True)


# In[137]:


df_new


# In[132]:


df_new.drop(['Index'], axis=1)


# In[129]:


df_new.drop(['rate'])


# In[143]:


Export = df_new.to_json(r'/Users/jaaviondavis/Desktop/Export_DataFrame.json')


# In[ ]:





# In[144]:


df_new


# In[ ]:





# In[ ]:




