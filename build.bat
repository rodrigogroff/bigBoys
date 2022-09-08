
del /s /q D:\repos\zxcv\dist\*
rmdir /s /q D:\repos\zxcv\dist
mkdir D:\repos\zxcv\dist

call npm run build

xcopy ".\src\static\js\server.js" .\dist /E /D /S /I /Q /Y /F
xcopy .\src\static\html .\dist /E /D /S /I /Q /Y /F
xcopy .\src\static\css .\dist\src\static\css /E /D  /S /I /Q /Y /F
xcopy .\src\static\img .\dist\src\static\img /E /D /S /I /Q /Y /F
xcopy .\src\static\vendor .\dist\src\static\vendor /E /D /S /I /Q /Y /F
xcopy .\src\static\products .\dist\src\static\products /E /D /S /I /Q /Y /F

node dist/server.js

