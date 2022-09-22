import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MoneyIcon from '@mui/icons-material/Money';
import BoltIcon from '@mui/icons-material/Bolt';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['실시간 검색어', '인공지능 로또 번호 추천', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Top = () => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    switch (event.currentTarget.textContent) {
      case pages[0]:
        router.push('/');
        break;
      case pages[1]:
        router.push('/lotto');
        break;
      case pages[2]:
        router.push('/about');
        break;
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            ISSUE NOW
          </Typography>

          {/* 반응형 부분 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>

          {/* 데스크탑 부분 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/*<Box sx={{ flexGrow: 0 }}>*/}
          {/*  <Tooltip title="Open settings">*/}
          {/*    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
          {/*      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
          {/*    </IconButton>*/}
          {/*  </Tooltip>*/}
          {/*  <Menu*/}
          {/*    sx={{ mt: '45px' }}*/}
          {/*    id="menu-appbar"*/}
          {/*    anchorEl={anchorElUser}*/}
          {/*    anchorOrigin={{*/}
          {/*      vertical: 'top',*/}
          {/*      horizontal: 'right',*/}
          {/*    }}*/}
          {/*    keepMounted*/}
          {/*    transformOrigin={{*/}
          {/*      vertical: 'top',*/}
          {/*      horizontal: 'right',*/}
          {/*    }}*/}
          {/*    open={Boolean(anchorElUser)}*/}
          {/*    onClose={handleCloseUserMenu}*/}
          {/*  >*/}
          {/*    {settings.map((setting) => (*/}
          {/*      <MenuItem key={setting} onClick={handleCloseNavMenu}>*/}
          {/*        <Typography textAlign="center">{setting}</Typography>*/}
          {/*      </MenuItem>*/}
          {/*    ))}*/}
          {/*  </Menu>*/}
          {/*</Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
  // const router = useRouter();
  // const [value, setValue] = useState(0);
  //
  // let activeTab;
  //
  // useEffect(() => {
  //   let activeTab = router.pathname;
  //   if (activeTab === "/") {
  //     setValue(0);
  //   }else if (activeTab === "/lotto"){
  //     setValue(1);
  //   }
  // });
  //
  // const handleChange = (event: React.SyntheticEvent, newValue: any) => {
  //   setValue(newValue);
  // };
  //
  // return(
  //   <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
  //     <Tabs sx={{
  //       mx: 'auto',
  //       p: 1,
  //       m: 1,
  //       borderRadius: 1,
  //       textAlign: 'center',
  //     }}value={value} onChange={handleChange} aria-label="icon tabs example">
  //       <Tab icon={<BoltIcon />} label="실시간 검색어" onClick={()=>{router.push("/")}}/>
  //       <Tab icon={<MoneyIcon />} label="로또 번호 추천" onClick={()=>{router.push("/lotto")}}/>
  //     </Tabs>
  //   </div>
  // );
};

export { Top };
