
@echo off
fixjsstyle ^
  -r ../js_src ^
  --closurized_namespaces="goog,yugi" ^
  --strict
